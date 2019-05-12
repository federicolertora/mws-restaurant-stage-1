// console.log('Hello! I am a service worker!');


self.addEventListner('install', function(event) {
	console.log('event.request');
});


// self.addEventListner('activate', function(event) {
// 	//..
// });



// self.addEventListner('fetch', function(event) {
// 	console.log(event.request);
// });


// event.request