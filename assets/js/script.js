$(function () {
  $('.js-modal').magnificPopup({
    fixedContentPos: true,
    type: 'inline',
    preloader: false,
    showCloseBtn: false,
    mainClass: 'mfp-fade01',
    removalDelay: 200,
    callbacks: {
      open: function () {
        closeBtn();
      },
    }
  });
  function closeBtn() {
    $('.modal_close').on('click', function () {
      $('.js-modal').magnificPopup('close');
    });
  }
});


/***   pcの場合   ***/
const mql_pc = window.matchMedia('screen and (min-width: 992px)');

// =============== LOADING ===============
function loading() {
  if(!document.getElementById("loader")) {
    $("body").addClass("loader-fade");
  }
  else {
    $("#loader .loader_inner").addClass("anime");
    let animationEndEvents = [
      "webkitAnimationend",
      "mozAnimationend",
      "oAnimationend",
      "animationend"
    ];
    let animationEnd = animationEndEvents.join(" ");
    $("#loader .loader_inner").on(animationEnd, function(event) {
      event.stopPropagation()
      $("#loader .loader_overLay").addClass("anime");
    });
    $("#loader .loader_overLay").on(animationEnd, function() {
      $(".ct-wrap").addClass("visualIn");
      $("#loader").remove();
      $("body").addClass("loader-fade");
    });
  }
}

$(window).on('load', function () {
  loading();
});

// $(function() {
// 	// 1回目のアクセス
//   if ($.cookie("access") == undefined) {
// 		loading();
// 		$.cookie("access", 'once');
// 	} else {
// 		$("#loader").remove();
//    $("body").addClass("loader-fade");
// 	}
// });


// =============== ANIMATION ===============
// 交差を監視
if(mql_pc.matches) {
  var anime_margin='-28% 0px';
} else {
  var anime_margin='-30% 0px';
}
const options = {
  root: null,
  rootMargin: anime_margin,
  threshold: 0,
};
const fadeIns = document.querySelectorAll('.js-animation');
const observer = new IntersectionObserver(showElements,options);

fadeIns.forEach(fadeIn => {
  observer.observe(fadeIn);
});

// 要素が表示されたら実行する動作
function showElements(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn');
    }
  });
};



// =============== slick  ===============
$('.collaboration_list').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// =============== macy  ===============
var masonry = new Macy({
  container: '#macy',
  trueOrder: false,
  waitForImages: false,
  useOwnImageLoader: false,
  margin: {
    x: 10,
    y: 10
  },
  columns: 4,
  breakAt: {
    576: {columns: 2}
  }
});

// =============== acordion  ===============

$(function () {
  $(".acordion .acordion_btn").on("click", function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass("on", 300);
  });
});