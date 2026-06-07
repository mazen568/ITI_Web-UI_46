const filesToCache = [
  "/",
  "index.html",
  "/js/main.js",
  "/styles/index.css",
  "/pages/offline.html",
  "/pages/404.html",
];

const myCach = "pages";

self.addEventListener("install", (event) => {
  console.log("installing.......");
  event.waitUntil(
    caches.open(myCach).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("activating.............");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log("Serving from cache:", event.request.url);
        return cachedResponse;
      }
      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse.status === 404) {
            console.log("Network 404 detected, serving 404 page");
            return caches.match("/pages/404.html");
          }
            
          return caches.open(myCach).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            console.log("Dynamically cached:", event.request.url);
            return networkResponse;
          });
        })
        .catch((err) => {
          return caches.match("/pages/offline.html");
        });
    })
  );
});

