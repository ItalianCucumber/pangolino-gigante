var gp = $('.gp'),
	limit_gp = 650; /* scrolltop value when opacity should be 0 */
var past = $('.past'),
	upper_limit_past = 750;
lower_limit_past = 1950;

$(window).on('scroll', function() {
	var st = $(this).scrollTop();
	console.log(st);
	console.log((1 - st / limit_gp));
	console.log((0 + st / upper_limit_past));

	/* avoid unnecessary call to jQuery function */
	if (st <= limit_gp + 50) {
		gp.css({
			'opacity': (1 - (st - 400) / (limit_gp - 400))
		});
	}
	if (st <= upper_limit_past) {
		past.css({
			'opacity': (0 + (st - limit_gp + 100) / (upper_limit_past - limit_gp + 100))
		});
	}
	if (st <= lower_limit_past && st >= upper_limit_past) {
		past.css({
			'opacity': (1 - (st - lower_limit_past + 500) / (lower_limit_past - lower_limit_past + 500))
		});
	}
});