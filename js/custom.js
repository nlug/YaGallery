$().ready(function() {
	$('.container img').wrap('<div></div>').each(function (item) {
		$(this).addClass('img'+item);
		setTimeout(function() {
			$('.img'+item).fadeIn(600);
		}, (item+1)*100);
	});
});