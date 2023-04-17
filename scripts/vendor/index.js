$(document).ready(() => {
	
	
	//read more
	// $('.reviews-item__text ').readmore({
	// 	speed: 75,
	// 	moreLink: '<a class="reviews-item__link link" href="#"> <span>читать полностью</span><div class="link__btn"><div class="_icon-arrow-link"></div></div></a>',
	// 	lessLink: '<a class="reviews-item__link link" href="#"> <span>скрыть</span><div class="link__btn"><div class="_icon-arrow-link"></div></div></a>',
	// 	collapsedHeight: 222,
	// 	afterToggle: function(trigger, element, expanded) { if(! expanded) { $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } ); } }
	// });
	// header
	if ($(window).width() >= 991) {
		var header = $('.js-header'),
				cloneHeader = header.clone();
		cloneHeader.addClass('header__fixed');
		header.before(cloneHeader);
		header.addClass('simple')
		$(window).scroll(function() {
			if ( $(window).scrollTop() > 150 ) {
				cloneHeader.addClass('header__show');
				$('.simple .header__top .large-menu').removeClass('-active')
				$('.js-menu-main-icon').removeClass('open')
			} else {
				cloneHeader.removeClass('header__show');
				$('.large-menu').removeClass('-active')
				$('.js-menu').removeClass('-active')
				$('.js-menu-icon').removeClass('open')
			}
		});
	}
	$('.js-menu').click(function(e) {
		$(this).toggleClass('-active')
		$(this).parents('.header__top').children('.large-menu').toggleClass('-active')
	})
	
	//мобильное меню
	$('.icon-menu-mobile').click(function(e) {
		$(this).toggleClass('open')
		$('.mobile-menu').toggleClass('-active')
	})
	$('.menu__item a').click(function(e) {
		$('.icon-menu-mobile').removeClass('open')
		$('.mobile-menu').removeClass('-active')
	})

	$('.js-menu-mob').click(function(e) {
		$('.mobile-menu__wrap_hide').addClass('-open')
	})
	$('.js-menu-back').click(function(e) {
		$('.mobile-menu__wrap_hide').removeClass('-open')
	})

	//header tabs
	$('.adult li').on('click', function (e) {
		e.preventDefault()
		var selected = $(e.currentTarget);
		var contentId = selected.data('content')
		var items = $('.adult li');
		var comments = $('.adult-content'); 
		var selectedComment = comments.filter('[data-content-id=' + contentId + ']');
		comments.removeClass('-active');
		items.removeClass('-active');
		selectedComment.addClass('-active');
		selected.addClass('-active');
	});
	$('.child li').on('click', function (e) {
		e.preventDefault()
		var selected = $(e.currentTarget);
		var contentId = selected.data('content')
		var items = $('.child li');
		var comments = $('.child-content'); 
		var selectedComment = comments.filter('[data-content-id=' + contentId + ']');
		comments.removeClass('-active');
		items.removeClass('-active');
		selectedComment.addClass('-active');
		selected.addClass('-active');
	});
	$('.tabs__item').on('click', function (e) {
		e.preventDefault()
		var selected = $(e.currentTarget);
		var contentId = selected.data('content')
		var items = $('.tabs__item');
		var comments = $('.tab-content'); 
		var selectedComment = comments.filter('[data-content-id=' + contentId + ']');
		comments.removeClass('-active');
		items.removeClass('-active');
		selectedComment.addClass('-active');
		selected.addClass('-active');
	});
	$('.video-item').on('click', function (e) {
		e.preventDefault()
		var selected = $(e.currentTarget);
		var contentId = selected.data('content')
		var items = $('.video-item');
		var comments = $('.block-video'); 
		var selectedComment = comments.filter('[data-content-id=' + contentId + ']');
		comments.removeClass('-active');
		items.removeClass('-active');
		selectedComment.addClass('-active');
		selected.addClass('-active');
	});


	//footer
	if($(window).width() < 1200){
		$('.footer__item .footer__title').on('click', function(e) {
			e.preventDefault()
			$(this).toggleClass('open')
			var $contentOpen = $(this).next('.footer__spoler')
			$(this).hasClass('open') ? ($($contentOpen).stop(!0, !0).slideDown()) : ($($contentOpen).slideUp())
		})
	}

	//comparison-slider
	$(function(){
		$('.twentytwenty-container').twentytwenty();
	});

	//tabs
	$('.tabs').each(function(){
		var $active, $content, $links = $(this).find('a');
		$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		//$active.parent().addClass('-active');
		$active.addClass('-active');
		$content = $($active[0].hash);
		$links.not($active).each(function () {
			$(this.hash).hide();
		});
		$(this).on('click', 'a', function(e){
			//$active.parent().removeClass('-active');
			$active.removeClass('-active');
			$content.hide();
			$active = $(this);
			$content = $(this.hash);
			//$active.parent().addClass('-active');
			$active.addClass('-active');
			e.preventDefault();
			$content.show(1, function () {
				$('.pop-services-slider, .location-slider').slick('setPosition');
			});
		});
	});

	//аккардеон
	// ! function(i) {
	// 	var bars, info;
	// 	i('.description__block').on('click', function() {
	// 		bars = i(this).parents('.description'), info = bars.find('.description__info'),
	// 		bars.hasClass('-active') ? (bars.removeClass('-active'),
	// 		info.slideUp()) : (bars.addClass('-active'), info.stop(!0, !0).slideDown( 500, 'linear', function(){
	// 		}),
	// 		bars.siblings('.-active').removeClass('-active').children('.description__info').stop(!0, !0).slideUp())
	// 	})
	// }(jQuery);

	var accBody = $(".description__info");
	var acc = $(".description");
	$(".description__block").on('click', function (e) {
		let classBoyd = $(this).closest(acc).find(accBody).hasClass('-active');
		e.preventDefault();
		$('.description__block').closest(acc).removeClass('-active');
		$(this).closest(acc).toggleClass('-active');
		$(accBody).removeClass('-active');
		$(this).closest(acc).find(accBody).toggleClass('-active');
		if (classBoyd) { // true
			$(this).closest(acc).find(accBody).slideUp();
			$(this).closest(acc).find(accBody).removeClass('-active');
			$(this).closest(acc).removeClass('-active');
		}
		if (!classBoyd) { // false
			$(accBody).slideUp();
			$(this).closest(acc).find(accBody).slideToggle();
		}
	})




	// форма поиска
	$('.search-form__icon').on('click', function() {
		$(this).toggleClass('_active')
		$('.search-form').toggleClass('_active')
	})
	$('.search-form__item-close').on('click', function() {
		$('.search-form__icon').removeClass('_active')
		$('.search-form').removeClass('_active')
	})
	$(document).on('mouseup', function (e) { // событие клика по веб-документу
		var dropdowns = $('.search-form'); // тут указываем ID элемента
		if (!dropdowns.is(e.target) // если клик был не по нашему блоку
			&&
			dropdowns.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.search-form').removeClass('_active');
			$('.search-form__icon').removeClass('_active');
		}
	});

	//dropdown - language
	$('.dropdown__content a').on('click', function(e){
		e.preventDefault();
		var dropdownHtml = $(this).html();
		var currentField = $(this).parents('.dropdown').children('.dropdown__current')
		$(currentField).html(dropdownHtml)
		$('.dropdown__current').removeClass('-active')
		$('.dropdown__content').slideUp(300);
	});
	$('.dropdown__current').on('click', function(e){
		e.preventDefault();
		var $content = $(this).next('.dropdown__content')
		//$('.dropdown__current').removeClass('-active')
		//$('.dropdown__content').slideUp(300);
		$(this).toggleClass('-active')
		if($(this).hasClass('-active')){
			$($content).slideDown(300);
		}else{
			$($content).slideUp(300);
		}
	});


	if($(window).width() > 991){
		$('.video-large-slider').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows : true,
			dots: true,
			autoplay: false,
			prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
			nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		});
	}
	if($(window).width() < 991){
		$('.video-large-slider').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows : true,
			dots: true,
			autoplay: false,
		});
	}
	if($(window).width() < 568){
		$('.videos-slider').addClass('content-slider');
		$('.videos-slider').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows : false,
			dots: false,
			autoplay: false,
			responsive: [
			]
		});
	}
	if($(window).width() < 768){
		$('.what-it-slider').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows : false,
			dots: true,
			autoplay: false,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows : false,
						dots: false,
					}
				},
			]
		});
	}
	if($(window).width() < 768){
		$('.why-us-slider, .we-offer-slider').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows : false,
			dots: true,
			autoplay: false,
			responsive: [
				{
					breakpoint: 680,
					settings: {
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows : false,
						dots: false,
					}
				},
			]
		});
	}
	if($(window).width() < 768){
		$('.guarantees-slider').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows : false,
			dots: true,
			autoplay: false,
			responsive: [
				{
					breakpoint: 568,
					settings: {
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows : false,
						dots: true,
					}
				},
			]
		});
	}

	//slick
	$('.main-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows : true,
		dots: true,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
		]
	});
	$('.blocks-slider, .location-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows : true,
		dots: false,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
		]
	});
	$('.process-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows : true,
		dots: false,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>',
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: false,
				}
			},
		]
	});
	$('.info-slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows : true,
		dots: true,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows : false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: false,
				}
			},
		]
	});
	$('.stages-slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows : true,
		dots: false,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 1630,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					arrows : false,
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows : false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: false,
				}
			},
		]
	});
	
	$('.work-slider').slick({
		swipe: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows : true,
		dots: false,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		appendArrows: $('.slider-counter'),
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : true,
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 1,
					variableWidth: true,
					slidesToScroll: 1,
					arrows : true,
					dots: false,
				}
			},
		]
	});
	$('.newspapers-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows : true,
		dots: true,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: false,
					arrows : false,
				}
			},
		]
	});

	$('.specialists-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows : true,
		dots: false,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows : false,
					dots: true,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: true,
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: false,
				}
			},
		]
	});
	$('.vacancies-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows : true,
		dots: false,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows : false,
					dots: true,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: true,
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: false,
				}
			},
		]
	});
	$('.reviews-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows : true,
		dots: false,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows : false,
					dots: true,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: true,
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: false,
				}
			},
		]
	});
	$('.pop-services-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows : true,
		dots: true,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows : false,
					dots: true,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: true,
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: false,
				}
			},
		]
	});
	$('.news-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows : false,
		dots: true,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows : false,
					dots: true,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: true,
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : false,
					dots: false,
				}
			},
		]
	});
	$('.diplomas-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows : true,
		dots: false,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					arrows : true,
					dots: true,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows : true,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows : true,
					dots: true,
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : true,
					dots: true,
				}
			},
			{
				breakpoint: 461,
				settings: {
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows : true,
					dots: true,
				}
			},
		]
	});
	$('.education-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows : true,
		dots: false,
		autoplay: false,
		prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
		nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
		responsive: [
			{
				breakpoint: 1230,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows : true,
					dots: false,
				}
			},
			{
				breakpoint: 991,
				settings: {
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows : true,
					dots: false,
				}
			},
			{
				breakpoint: 568,
				settings: {
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows : true,
					dots: false,
				}
			},
			{
				breakpoint: 461,
				settings: {
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows : true,
					dots: false,
				}
			},
		]
	});

	
	//fancybox
	$('[data-fancybox]').fancybox({
		speed : 330,
		image : {
			protect : true
		}
	});
	
	$('.modal-iframe').fancybox({
		type:'swf',
		allowfullscreen: 'true',
		maxWidth: 1000,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$(function(){
		$('.modal-inline').fancybox({
			margin: 20,
			padding: 0,
			maxWidth: '60%',
			autoScale: true,
			transitionIn: 'none',
			transitionOut: 'none',
			type: 'inline',
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
	});

	

	// step
	$('.wizard').wizard({
		onInit: () => {},
		buttonLabels: {
			next: 'Следующий шаг',
			back: 'Назад',
			finish: 'Получить план',
		},
	})


	//phone
	$('#phone, #phone1, #phone2, #phone3').mask('+7(999) 999-99-99')

	//button-up
	var button = $('#button-up');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});
	button.on('click', function () {
		$('body, html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//фокус полей
	$('input,textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '')
	})
	$('input,textarea').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'))
	})

	//модальное окно
	var modalButton = $(".modal-button");
	modalButton.on('click', function(e){
		e.preventDefault();
		console.log("asdad")
		$('body').toggleClass('overflow-hidden');
		var id = $(this).attr('href');
		console.log(id)
		$(id).addClass('show');
	});
	$(".modal-block__close").on('click', function (e) {
		e.preventDefault();
		$('body').removeClass('overflow-hidden');
		$(this).closest('.modal-block').removeClass('show');
	})


	$('.modal-block__close').on('click', function (e) {
		e.preventDefault();
		$('.modal-block').removeClass('show');
		$('body').removeClass('overflow');
	});
	$('.js-modal').on('click', function (e) {
		$('.modal-block').removeClass('show');
		$('.adressa').addClass('show');
		$('body').addClass('overflow');
		e.preventDefault();
	});
	$('.js-modal-online').on('click', function (e) {
		$('.modal-block').removeClass('show');
		$('.online-js').addClass('show');
		$('body').addClass('overflow');
		e.preventDefault();
	});
	$('.vacancy-js').on('click', function (e) {
		$('.modal-block').removeClass('show');
		$('.js-vacancy').addClass('show');
		$('body').addClass('overflow');
		e.preventDefault();
	});
	$('.reviews-js').on('click', function (e) {
		$('.modal-block').removeClass('show');
		$('.js-reviews').addClass('show');
		$('body').addClass('overflow');
		e.preventDefault();

	});

	$(".modal-button").on('click', function () {
		$('.modal-reviews').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows : true,
			dots: false,
			autoplay: false,

		});
	})



	$('.about-us-js').on('click', function (e) {
		$('.modal-block').removeClass('show');
		$('.js-about-us').addClass('show');
		$('body').addClass('overflow');
		e.preventDefault();
		$('.modal-about').slick({
			infinite: true,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows : true,
			dots: false,
			autoplay: false,
			prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
			nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
			appendArrows: $('.modal-slider-about'),
		});
	});
	

	$('.js-history').on('click', function (e) {
		$('.modal-block').removeClass('show');
		$('.history-js').addClass('show');
		$('body').addClass('overflow');
		e.preventDefault();
		$('.history-slider').slick({
			dots: false,
			infinite: true,
			touchThreshold : 100,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			centerMode: true,
			prevArrow: '<button class="slick-prev slick-arrow" type="button"></button>', 
			nextArrow: '<button class="slick-next slick-arrow" type="button"></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 568,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
			]
		});
	});
	

	// селект
	$('.select select').each(function (i, el) {
		$(el).select2({
			placeholder: {
				id: '',
				text: $(el).attr('placeholder')
			},
			width: '100%',
			minimumResultsForSearch: Infinity,
			dropdownCssClass: 'catalog-select2'
		});
	});

	$('#summ').on('input', function(e){
		const sum = $('#summ').val();
		$('.js-summ span').text(' ' + sum.toLocaleString('ru') + ' ₽');
		if(sum == ''){
			$('.js-summ span').text('')
		}
	});

	// $('.request__wrap').on('scroll', function(e){
	// 	$('.select select').select2('close')
	// });

	// scroll menu
	if($(window).width() > 991){
		$('.article__contents a').click(function() {
			var elementClick = $(this).attr('href')
			var destination = $(elementClick).offset().top - 60
			jQuery('html:not(:animated),body:not(:animated)').animate(
				{
					scrollTop: destination,
				},
				800
			)
			return false
		})
	}
	if($(window).width() < 991){
		$('.article__contents a').click(function() {
			var elementClick = $(this).attr('href')
			var destination = $(elementClick).offset().top - 80
			jQuery('html:not(:animated),body:not(:animated)').animate(
				{
					scrollTop: destination,
				},
				800
			)
			return false
		})
	}


})
