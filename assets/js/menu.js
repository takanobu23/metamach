const setFillHeight = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// ここからリサイズの対応
let vw = window.innerWidth;
window.addEventListener('resize', () => {
	if (vw === window.innerWidth) {
		// 画面の横幅にサイズ変動がないので処理を終える
		return;
	}

	// 画面の横幅のサイズ変動があった時のみ高さを再計算する
	vw = window.innerWidth;
	setFillHeight();
});

// 実行
setFillHeight();

$(function() {
    $('.header_button').on('click',function(){
        if ( $(this).hasClass('is-open') ){
            $(this).next().removeClass('active');
        } else {
            $(this).next().addClass('active');
        }
    });
    $('.header_button-close').on('click',function(){
        $(this).parents('.header_nav').removeClass('active');
    });
    $('.header_nav-link,.header_nav .fv_btn').on('click',function(){
        $(this).parents('.header_nav').removeClass('active');
    });
});

$(function() {
	$('#To_register').on('submit',function(e){
			e.preventDefault()
			console.log("hi")
            const url = './contact.html'
            window.open(url, '_blank')
		}
	);
}
)

/*
$(function() {
	var state = false;
	var scrollpos;
	$('.header_button').on('click',function(){
        if ( $(this).hasClass('is-open') ){
            $(this).next().removeClass('active');
            $('body').removeClass('is-fixed').css({'top': 0});
            window.scrollTo( 0 , scrollpos );
            state = false;				
        } else {
            $(this).next().addClass('active');
            scrollpos = $(window).scrollTop();
            $('body').addClass('is-fixed').css({'top': -scrollpos});
            state = true;
        }
	});
    $('.header_button-close').on('click',function(){
        $(this).parents('.header_nav').removeClass('active');
        $('body').removeClass('is-fixed').css({'top': 0});
        window.scrollTo( 0 , scrollpos );
        state = false;
    });
	$('.header_nav-link,.header_nav .fv_btn').on('click',function(){
		$('body').removeClass('is-fixed').css({'top': 0});
		window.scrollTo( 0 , scrollpos );
		state = false;		
		$(this).parents('.header_nav').removeClass('active');
	});
});
*/