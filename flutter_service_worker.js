// Replaces the Flutter web service worker that the old site registered at
// this URL. Browsers that still have it installed fetch this file on their
// next visit, install it, and it then clears the Flutter caches, unregisters
// itself and reloads open tabs so they get the new site. Safe to delete once
// old visitors have cycled through (a few months after launch).
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) client.navigate(client.url);
    })(),
  );
});
