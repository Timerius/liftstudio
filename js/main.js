// $('.vol-rub').click(function() {
// 	$('.vol-rub').addClass('active')
// 	$('.vol-usd').removeClass('active');
// 	$('.vol-uan').removeClass('active');
// 	// Видео для бизнеса, промо-ролики, презентации, портфолио:
// 		
//   		$('.c2').text("1600 руб.");
//   		$('.c3').text("2200 руб.");
//   		$('.c4').text("2700 руб.");
//   		$('.c5').text("3250 руб.");
//   	// Поздравительные видео, слайд-шоу:
//   		$('.c6').text("1350 руб.")
//   	// Креативы (Facebook, Instagram):
//   		$('.c11').text("400 руб.");
//   	// Музыка для видео:
//   		$('.c13').text("1600 руб.");
// 	});

$('.vol-usd').click(function() {
	$('.vol-usd').addClass('active')
	$('.vol-rub').removeClass('active');
	$('.vol-uan').removeClass('active');
	// Видео для бизнеса, промо-ролики, презентации, портфолио:
		
  		$('.c2').text("21 $");
  		$('.c3').text("28 $");
  		$('.c4').text("35 $");
  		$('.c5').text("42 $");
  	// Поздравительные видео, слайд-шоу:
  		$('.c6').text("18 $");
  	// Креативы (Facebook, Instagram):
  		$('.c11').text("5 $");
  	// Музыка для видео:
  		$('.c13').text("21 $");
	});

$('.vol-uan').click(function() {
	$('.vol-uan').addClass('active')
	$('.vol-rub').removeClass('active');
	$('.vol-usd').removeClass('active');
	// Видео для бизнеса, промо-ролики, презентации, портфолио:
		
  		$('.c2').text("600 грн.");
  		$('.c3').text("800 грн.");
  		$('.c4').text("1000 грн.");
  		$('.c5').text("1200 грн.");
  	// Поздравительные видео, слайд-шоу:
  		$('.c6').text("500 грн.");
  	// Креативы (Facebook, Instagram):
  		$('.c11').text("150 грн.");
  	// Музыка для видео:
  		$('.c13').text("600 грн.");
	});



// Плавная прокрутка страницы по якорям (без обращения к элементам) top -80 указывает на сколько подымать секцию по высоте от верха экрана.
	$("a[href*=#]").on("click", function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top -60}, 777);
		e.preventDefault();
		return false;
	});




// открытие меню по клику на гамбургер
    $('.menu-gamb').click(function() {
		$('.menu').toggleClass('menu-open')
		
	});


//  Возврат меню в исходное положение, после нажатия на пункт меню
	$('.menu li a').click(function() {	
		 $('.menu').removeClass('menu-open');
	});






jQuery('.btn-player').bind("click", function(event) {
        if (jQuery(this).hasClass('on')) {
            //если данная мелодия уже проигрывается
            //снимаем флаг ON
            jQuery(this).removeClass('on');

            //останавливаем проигрыватель
            jQuery('#my-hidden-player').get(0).pause();
        } else {
            //если данная мелодия не проигрывается в текущий момент
            //выключаем все остальные кнопки
            jQuery('.btn-player').removeClass('on');
            //добавляем класс ON
            jQuery(this).addClass('on');
            var pl = jQuery('#my-hidden-player').get(0);
            //останавливаем текущую мелодию
            pl.pause();
            //устанавливаем новый источник
            pl.src = jQuery(this).attr('data-src');
            //включаем проигрывание
            pl.play();
        }
    });
