importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
workbox.routing.registerRoute(() => true, workbox.strategies.staleWhileRevalidate());
