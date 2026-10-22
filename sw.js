/* SuttaPath service worker — offline-first.
 *
 * Shell assets are precached on install (individually, so one missing file
 * cannot fail the whole install). Navigations are served from the cached
 * shell and revalidated in the background; assets are stale-while-revalidate.
 */
const VERSION = "suttapath-v16";
const SHELL = [
  "./",
  "./index.html",
  "./assets/app.css",
  "./assets/v02.css",
  "./assets/app.js",
  "./assets/data/content.js",
  "./manifest.webmanifest",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/favicon.svg",
];

const OFFLINE_HTML = `<!doctype html><meta charset="utf-8"><title>SuttaPath — offline</title>
<style>body{font-family:Georgia,serif;background:#f4f1e8;color:#191813;margin:0;display:grid;place-items:center;min-height:100vh;padding:24px}main{max-width:34ch}h1{font-weight:400;font-size:28px;margin:0 0 12px}p{line-height:1.6;color:#4a463d}</style>
<main><h1>Not cached yet</h1><p>SuttaPath has not stored this page on your device. Reconnect once, open the app, and it will be available offline from then on.</p></main>`;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then(async (cache) => {
      await Promise.allSettled(
        SHELL.map((url) =>
          cache.add(new Request(url, { cache: "reload" })).catch((err) => {
            console.warn("[sw] could not cache", url, err);
          })
        )
      );
      await self.skipWaiting();
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

const networkThenCache = (req) =>
  fetch(req).then((res) => {
    if (res && res.status === 200 && res.type === "basic") {
      const copy = res.clone();
      caches.open(VERSION).then((cache) => cache.put(req, copy));
    }
    return res;
  });

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith(
      caches.match("./index.html", { ignoreSearch: true }).then((hit) => {
        if (hit) {
          // Serve immediately, refresh quietly for the next visit.
          event.waitUntil(networkThenCache(new Request("./index.html")).catch(() => {}));
          return hit;
        }
        return networkThenCache(req).catch(() =>
          caches.match("./index.html", { ignoreSearch: true }).then((fallback) => fallback || new Response(OFFLINE_HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } }))
        );
      })
    );
    return;
  }

  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      const network = networkThenCache(req).catch(() => hit);
      return hit || network;
    })
  );
});
