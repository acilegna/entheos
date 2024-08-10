 var indicador = 0;
		$(document).on('ready', function(){

			$('.left').on('click', function(e){
				e.preventDefault();
				moveSlider('left');
			});

			$('.right').on('click', function(e){
				e.preventDefault();
				moveSlider('right');
			});

			function auto(){
				intv = setInterval(function(){
				$('.right').click();
				}, 2100);
		
				}
				 
				auto(); // start
				$('.sp-content').hover(function( e ){
				return e.type=='mouseenter'?clearInterval(intv):auto();
				});

			defineSizes();
		});
		
		 

		function moveSlider(direccion){
			var limite = $('.sp-content .slide').length;
			indicador = (direccion == 'right') ? indicador + 1 : indicador - 1;
			indicador = (indicador >= limite) ? 0 : indicador;
			indicador = (indicador < 0) ? limite - 1 : indicador;

			$('.sp-content .sp-slider').animate({
				'margin-left': -(indicador * $('.sp-content').width())+'px'
			})

		}

/************************************************************************************************/

$(document).ready(function(){
	responsive_menu = $('.navbar-collapse');
	$('.navbar-toggle').on('click', function(e) {
		e.preventDefault();
		responsive_menu.slideToggle();
	});
	$(window).resize(function(){
		var obtener_ancho = $(this).width(); 
		if(obtener_ancho > 768 && responsive_menu.is(':hidden')) {
			responsive_menu.removeAttr('style');
		}
	}); 
	$('nav li').on('click', function(e) {                
		var obtener_ancho = $(window).width();
		if(obtener_ancho < 768 ) {
			responsive_menu.slideToggle(); 
		}
	});

});
