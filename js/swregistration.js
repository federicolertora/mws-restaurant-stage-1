//  Registration of Service Worker:



if (navigator.serviceWorker) {
	navigator.serviceWorker.register('/sw.js').then(function(registration){
		// Cache-Control: max-age=0;
		// updateViaCache: 'all';
		console.log('yer registered dude');
	}).catch(function(err) {
		console.log(`NO REGISTRATION FOR YOU!!!  ERROR IS: ${err}`);
	});
}

	


// PAST CODE SEGMENTS:


// , {scope: '/'}

	// if (!navigator.serviceWorker) return;
	// 	navigator.serviceWorker.register('/sw.js');	

	// 	, {
	// 	scope: '/udacity-mws-restaurant-reviews-project-stage-1/'
	// }


// if(navigator.serviceWorker) {
// 	navigator.serviceWorker.register('sw.js');
// }