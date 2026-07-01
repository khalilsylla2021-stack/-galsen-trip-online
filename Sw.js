self.addEventListener("install", e=>{
console.log("Galsen GTA installé");
});

self.addEventListener("fetch", e=>{
e.respondWith(fetch(e.request));
});
