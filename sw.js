//  REGISTER THEN INSTALL THEN ACTIVATE SERVICE WORKER



var staticCacheName = 'restaurant-reviews-static-v4';
var urlForCache = 					[

						'/',
						'index.html',
						'restaurant.html',
						'/css/styles.css',
						'/js/main.js',
						'/js/restaurant_info.js',
						'/js/dbhelper.js',
						'/data/restaurants.json',
						'/img/'
					];


self.addEventListener('install', function(event) {

	event.waitUntil(caches.open(staticCacheName).then(function(cache) {

				console.log('cache opened');
				return cache.addAll(urlForCache);

		})
	);
});



self.addEventListener('activate', function(event) {

	event.waitUntil(caches.keys().then(function(cacheNames) {

				return Promise.all(

			cacheNames.filter(function(cacheName) {

				return cacheName.startsWith('restaurant-reviews-static') &&
				cacheName !== staticCacheName;

			}).map(function(cacheName) {

				return caches.delete(cacheName);

				})
			)
		})
	)
});



self.addEventListener('fetch', function(event) {

		// console.log(event.request);

	event.respondWith(caches.match(event.request).then(function(response) {


			if (response) {

				return response;

			} else {
				
				return fetch(event.request);

			}

			

			// return cachedResponse || fetch(event.request);

			// if(response) return response;

			// return fetch(event.request);

		}) 
	);
});



// PAST CODE SEGMENTS:


	// console.log('Hello! I am a service worker!');

	//something new to you no i'm really new dang insanity




	// event.respondWith(
	// 	fetch(event.request).then(function(response) {
	// 		if(response.status == 404) {
	// 			return new Response("not here dude");
	// 		}

	// 		return response;
	// 	}).catch(function() {
	// 		return new Response("oh noooooes");
	// 	})
	// ); 


	// fetch(url)


	// event.respondWith(
	// 	'man i am confused'
	// 	)


	// console.log('event.request');

	// event.respondWith(
	// 	new Response('Hi there', {
	// 		headers: {'foo': 'bar'}
	// 	})
		

	// 	);
	// something

	// self.addEventListner('activate', function(event) {
	// 	//..
	// });



	// self.addEventListner('fetch', function(event) {
	// 	console.log(event.request);
	// });


	// event.request