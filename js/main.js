$(document).ready(function () {
    $(".main_nav li a, .scrollBtn").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        top = top - 60;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);

        $('.xs_menu').removeClass('active');
    });

    $(function()
    {
        $("input[type=tel]").mask("+7 (999) 999-9999");
    });

    new WOW().init();

    setInterval(function()
    {
        $('.blink_btn').addClass('blink_on');
        setTimeout(function(){$('.blink_btn').removeClass('blink_on')},1500);
    },2500);

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').addClass('active');
        } else {
            $('.scrollup').removeClass('active');
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('.o_xs_menu').click(function () {
        $('.xs_menu').addClass('active');
    });

    $('.c_xs_menu').click(function () {
        $('.xs_menu').removeClass('active');
    });


    $('.close').click(function ()
    {
        $('.modal_m').css('display','none');
    });

    $('input[name=name]').keyup(function () {
        var name = $(this).val();

        if(name == '')
        {
            $(this).addClass('error');
        } else
        {
            $(this).removeClass('error');
        }
    });

    $('input[name=phone]').keyup(function () {
        var phone = $(this).val();

        if(phone == '')
        {
            $(this).addClass('error');
        } else
        {
            $(this).removeClass('error');
        }
    });

    $(function () {
        $('.order_btn').click(function () {
            // var val = $(this).val();
            // $('#what').val(val);

            $('.xs_menu').removeClass('active');

            $.fancybox.open($('#order_modal'));
        });

        $('.order_cargo_btn').click(function () {
            $('.xs_menu').removeClass('active');

            $.fancybox.open($('#order_cargo_modal'));
        });

        $('.get_ques_btn').click(function () {
            $('.xs_menu').removeClass('active');

            $.fancybox.open($('#ques_modal'));
        });
    });

    $(function () {
        $('.main_slider').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            items: 1,
            autoplay:true,
            navText : ["<i class=\"fas fa-arrow-left fas_icon\"></i>","<i class=\"fas fa-arrow-right fas_icon\"></i>"],
            autoplayTimeout:10000,
            autoplayHoverPause:true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                },
            }
        });
    });

    $(function () {
        $('.choose_lang').click(function () {
            $(this).toggleClass('active');
            $('.langs_cont').toggleClass('active');

            $('.langs_cont .current-lang a').toggleClass('active');
            var curLang = $('.langs_cont .current-lang a').html();
            $(this).html(curLang);
        });
    });

    $(function () {
        document.addEventListener( 'wpcf7mailsent', function( event ) {
            $.fancybox.open($('#success'));
        }, false );
    });
});



$(function () {
    var header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();

        if ( scrolled > 20 && scrolled > scrollPrev ) {
            header.addClass('out');
            header.removeClass('sticky');
        } else {
            header.removeClass('out');
            header.addClass('sticky');
        }

        scrollPrev = scrolled;

        if ( scrolled < 20 ) {
            header.removeClass('sticky');
        }
    });
});



$(function () {
    var bLazy = new Blazy({
        breakpoints: [{
            width: 420 // Max-width
            , src: 'data-src-small'
        }]
        , success: function(element){
            setTimeout(function(){
                // We want to remove the loader gif now.
                // First we find the parent container
                // then we remove the "loading" class which holds the loader image
                var parent = element.parentNode;
                parent.className = parent.className.replace(/\bloading\b/,'');
            }, 200);
        }
    });
});
// <img class="b-lazy" src="images/placeholder.svg"
// data-src="images/whatsapp.svg"
// data-src-small="images/whatsapp.svg"
// alt="whatsapp">
