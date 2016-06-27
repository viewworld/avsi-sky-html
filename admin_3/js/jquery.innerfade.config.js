// JavaScript Document
	   $(document).ready(
				function(){
					$('.inner-news').innerfade({
						animationtype: 'slide',
						speed: 750,
						timeout: 10000,
						type: 'random',
						containerheight: '1em'
					});
					
					$('ul#portfolio').innerfade({
						speed: 1000,
						timeout: 5000,
						type: 'sequence',
						containerheight: '220px'
					});
					
					$('.inner-fade').innerfade({
						speed: 1000,
						timeout: 6000,
						type: 'random_start',
						containerheight: 'inherit'
					});
					
					$('.adi').innerfade({
						speed: 'slow',
						timeout: 5000,
						type: 'random',
						containerheight: '150px'
					});

			});
