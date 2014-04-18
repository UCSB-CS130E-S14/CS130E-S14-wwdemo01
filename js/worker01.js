// worker01.js

self.addEventListener('message', function(e) {
    self.postMessage(e.data + "back at 'cha!");
}, false);
