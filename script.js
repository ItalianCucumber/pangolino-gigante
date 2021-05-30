var gp = $('.gp'),
	limit_gp = 650; /* scrolltop value when opacity should be 0 */
var past = $('.past'),
	upper_limit_past = 750;
lower_limit_past = 2550;
var present = $('.present'),
	upper_limit_present = 2650;
lower_limit_present = 4850;
var future = $('.future'),
	upper_limit_future = 4750;
lower_limit_future = 5750;
var sa = $('.salvation'),
	limit_sa = 5650;
var dot = $('#circle');

$(window).on('scroll', function() {
	var st = $(this).scrollTop();
	console.log(st);

	dot.css({
		'top': `${(40 + (20 * (st / 5877)))}%`
	});

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
	if (st <= upper_limit_present) {
		present.css({
			'opacity': (0 + (st - lower_limit_past + 200) / (upper_limit_present - lower_limit_past + 200))
		});
	}
	if (st <= lower_limit_present && st >= upper_limit_present) {
		present.css({
			'opacity': (1 - (st - lower_limit_present + 450) / (lower_limit_present - lower_limit_present + 450))
		});
	}
	if (st <= upper_limit_future) {
		future.css({
			'opacity': (0 + (st - lower_limit_present + 250) / (upper_limit_future - lower_limit_present + 250))
		});
	}
	if (st <= lower_limit_future && st >= upper_limit_future) {
		future.css({
			'opacity': (1 - (st - lower_limit_future + 500) / (lower_limit_future - lower_limit_future + 500))
		});
	}
	if (st <= limit_sa) {
		sa.css({
			'opacity': (0 + (st - lower_limit_future + 300) / (limit_sa - lower_limit_future + 300))
		});
	}
});

5877