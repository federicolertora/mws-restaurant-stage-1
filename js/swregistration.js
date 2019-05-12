//  Registration of Service Worker:


// if (!navigator.serviceWorker) return;
// 	navigator.serviceWorker.register('/sw.js');



// if (!navigator.serviceWorker) return;
	navigator.serviceWorker.register('/sw.js'
	// 	, {
	// 	scope: '/udacity-mws-restaurant-reviews-project-stage-1/'
	// }
	).then(function(registration){
		console.log('yer registered dude');
	}).catch(function(err) {
		console.log('NO REGISTRATION FOR YOU!!!');
	});



// if(navigator.serviceWorker) {
// 	navigator.serviceWorker.register('sw.js');
// }