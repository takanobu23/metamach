$(function() {
	$('.js-select-input').multipleSelect({
		width: "100%",
	});
	$('.js-select-input2').multipleSelect({
		width: "100%",
	});
});

$(function() {
	$('.contact-block01 .contact-btn_next').on('click',function(e){
		if (document.getElementById('check').checked && document.getElementById('name').value && document.getElementById('mail').value ){
			e.preventDefault()
			$(this).parents('.contact-block').addClass('is-none');
			$('.contact-block02').removeClass('is-none');
		}
	});
	$('.contact-block01 .contact-btn_back').on('click',function(){
			$(this).parents('.contact-block').addClass('is-none');
			$('.contact-block00').removeClass('is-none');
	});
	$('.contact-block02 .contact-btn_next').on('click',function(e){
		if(document.getElementById('choice').value) {
		e.preventDefault()
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block03').removeClass('is-none');
		}
	});
	$('.contact-block02 .contact-btn_back').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block01').removeClass('is-none');
	});
	$('.contact-block03 .contact-btn_next').on('click',function(){
		if(match_list.length > 0){
			$(this).parents('.contact-block').addClass('is-none');
			$('.contact-block04').removeClass('is-none');
		}
	});
	$('.contact-block03 .contact-btn_back').on('click',function(){

			$(this).parents('.contact-block').addClass('is-none');
			$('.contact-block02').removeClass('is-none');
		
	});
	$('.contact-block04 .contact-btn_next').on('click',function(e){
		if(document.getElementById('material').value && document.getElementById('comunity').value && document.getElementById('tieup').value &&   	document.getElementById('other').value ) {
		e.preventDefault()
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block05').removeClass('is-none');
	}
	});
	$('.contact-block04 .contact-btn_back').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block03').removeClass('is-none');
	});
	$('.js-jump-05-1').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block05-1').removeClass('is-none');
	});
	$('.js-jump-05-2').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block05-2').removeClass('is-none');
	});
	$('.js-jump-05-3').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block05-3').removeClass('is-none');
	});
	$('.js-jump-05-4').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block05-4').removeClass('is-none');
	});
	$('.js-jump-06').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block06').removeClass('is-none');
	});
	$('.contact-block05 .contact-btn_back').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block04').removeClass('is-none');
	});
	$('.contact-block05-1 .contact-btn_back').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block05').removeClass('is-none');
	});
	$('.contact-block05-2 .contact-btn_back').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block05').removeClass('is-none');
	});
	$('.contact-block05-3 .contact-btn_back').on('click',function(){
		$(this).parents('.contact-block').addClass('is-none');
		$('.contact-block05').removeClass('is-none');
	});
});