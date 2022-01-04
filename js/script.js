$(document).ready(function () {
    AOS.init({
        once: true
    });
    // 안내창 닫기
    $('.modal').click(function () {
        $('.modal').fadeOut();
    });
    // ---gotop----
    $('.gotop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });
    // ---menu scroll----

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.head-top').addClass('head-top-on')
            $('.head-menu>li>a').addClass('head-menu-txt-on')
            $('.logo').addClass('logo-on')
        } else {
            $(".head-top").removeClass('head-top-on')
            $('.head-menu>li>a').removeClass('head-menu-txt-on')
            $('.logo').removeClass('logo-on')
        }
    })
    // -------------header----------------//
    //   top-close
    $('.top-close-bt').click(function () {
        $('.top-close').stop().slideUp();
    });

    // header fixed
    let headOffset = $('.head-fixed').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > headOffset.top) {
            $('.head-fixed').addClass('head-fixed-on');
        } else {
            $('.head-fixed').removeClass('head-fixed-on');
        }
    });

    // header gnb slide
    $('.depth1').mouseenter(function () {
        $('.depth2').stop().slideDown();
    });
    $('.depth1').mouseleave(function () {
        $('.depth2').stop().slideUp();
    });



    // -------------mainslide----------------
    // mainslide
    let main_sw = new Swiper('.ms-sw-container', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.main-next',
            prevEl: '.main-prev',
        },

    });
    // ----------beverage--------------
    // beverage swiper
    let bv_sw = new Swiper('.bv-sw-container', {
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loopedSlides: 3,
        speed: 1000,
        navigation: {
            nextEl: '.bv-next',
            prevEl: '.bv-prev',
        },
    });

    // ----------dessert--------------
    // dessert swiper
    let dessert_sw = new Swiper('.dessert-sw-container', {
        loop: true,

        slidesPerView: 5,
        slidesPerGroup: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        loopedSlides: 2,
        speed: 1000,
        navigation: {
            nextEl: '.dessert-next',
            prevEl: '.dessert-prev',
        },
    });

    // 추천 recommend

    let whole_sw = new Swiper('.wholecake-sw-container', {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".whole-pg",
            // 클릭이 가능하도록 처리
            clickable: true,
        },
    });
    // 테마 -하나 클릭시 다른거 사라짐-
    $(".thema-cont").hide().eq(0).show()
    $('.thema-menu>li').each(function () {
        $(this).click(function () {
            $(this).addClass('thema-on'); //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
            $(this).siblings().removeClass('thema-on'); //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
            $('.thema-title').removeClass('thema-txt-on');
            $(this).children('.thema-title').addClass('thema-txt-on');
            $(".thema-cont").hide()
            $(this).find(".thema-cont").show()
        });
    });
    // $(".thema-menu li").click(function(){
    //     let i = $(this).index();
    //     $(".thema-cont").hide().eq(i).show()
    // })
    //------------------ store------------
    new Swiper('.store-sw-container', {
        loop: true,
        slidesPerGroup: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 800,
        navigation: {
            nextEl: '.store-next',
            prevEl: '.store-prev',
        },

    });
    //------------------ sns------------
    new Swiper('.sns-sw-container', {
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 40,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 800,
        navigation: {
            nextEl: '.sns-next',
            prevEl: '.sns-prev',
        },

    });
});