'use strict';
import $ from 'jquery';
import slick from 'slick-carousel';
import video from './video.js';

headerColor();

$(document).ready(function () {

	$(window).scroll(function(){
		headerColor();
	});


	var maxHeight = 0;

	$(".directions__list .title__dir").each(function(){
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height(); }
	});
	$(".directions__list .title__dir").height(maxHeight);
	$('.directions__sublist').css({
		'padding-top' : maxHeight + 40
	});

	var maxHeight1 = 0;
	$(".youget__list .title__dir").each(function(){
		if ($(this).height() > maxHeight1) {
			maxHeight1 = $(this).height(); }
	});
	$(".youget__list .title__dir").height(maxHeight1);
	$('.youget__sublist').css({
		'padding-top' : maxHeight1 + 20
	});


	$('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
	});

	var maxHeight2 = 0;
	$(".slider__item .slider__header").each(function(){
		if ($(this).height() > maxHeight1) {
			maxHeight1 = $(this).height(); }
	});
	$(".slider__item .slider__header").height(maxHeight1);

	var maxHeight3 = 0;
	$(".format .format__content").each(function(){
		if ($(this).height() > maxHeight1) {
			maxHeight1 = $(this).height(); }
	});
	$(".format .format__content").height(maxHeight1);

	filter();

	$(document).on('click', function(el){
		var childr = $('.filter').find('*');

		if($(el.target).is(childr) == false ){
			$('.filter').removeClass('is-active');
			$('.filter__list').slideUp('fast');
		}
	});

	$('.js-ppp').click(function(e){
		e.preventDefault();
		//close all popup
		$('.ppp').removeClass('is-active');
		$('.ppp__content').removeClass('is-active');
		//open my popup
		var getClass = $(this).data('ppp');
		$('.ppp').addClass('is-active');
		$('#' + getClass).addClass('is-active');

	});

	$('.js-close').click(function(e){
		e.preventDefault();
		//close all popup
		closePpp();
	});


	$('.accordion__item.is-active .accordion__text').slideDown();

	$('.accordion__item').click(function(){
		$('.accordion__item').removeClass('is-active');
		$('.accordion__text').slideUp();
		$(this).addClass('is-active');
		$(this).find('.accordion__text').slideDown();
	});

}); // docready


function filter() {
	$(".js-filter").each(function(){
		var filter_list = $(this).children(".js-filter-list");
		var content = filter_list.find("li").first().html();

		$(this).click(function(event){
			var $self = $(this);

			if ($(this).hasClass("is-active")) {
					setTimeout(function () {
						$self.removeClass('is-active');
						// $(".js-filter-list").hide();
					}, 150);
					filter_list.slideUp("fast");
			} else {
					$(".js-filter").removeClass("is-active");
					$(".js-filter-list").hide();
					filter_list.slideDown("fast");
					$(this).addClass("is-active");
			}

			event.stopPropagation();
		});
		filter_list.find("li").click(function(event) {
			var id = $(this).attr("data-id");
			var content = $(this).html();
			$(this).parent().parent().find(".js-filter-text").html(content);
			$(this).parent().parent().find(".js-filter-input").val(id);
			$(this).parent().hide();
			$(this).parents(".js-filter").removeClass("is-active");
			event.stopPropagation();
		});
	});
}


function headerColor() {
	var $of  =  $(window).scrollTop();

	if($of > 20) {
		$('.page').addClass('is-scrolled');
	} else {
		$('.page').removeClass('is-scrolled');
	}
}

function closePpp(){
	$('.ppp').removeClass('is-active');
	$('.ppp__content').removeClass('is-active');
	$('.page').removeClass('ppp-opened');
}

$(document).on('click', function(el){
	var childr = $('.ppp__shadow');

	if($(el.target).is(childr) == true ){
		closePpp();
	}
});
