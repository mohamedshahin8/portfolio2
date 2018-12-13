
$(function () {

      'use strict';
      //header height
      var myHeader =   $('.header'); // بدل استخدمت حاجه اكتر من مره بنعملها فى متغير


        myHeader.height($(window).height());

        $(window).resize(function () {      //عشان اما اصغر واكبر الصوره تصغر وتكبر معايا بس متبوظش

            myHeader.height($(window).height());


          $('.bxslider').each(function () { // بيطبق الكلام دده على كل func

                $(this).css('paddingTop' , ($(window).height() - $('.bxslider li').height()) / 2 );  //بيشيل طول الli من الطول بتاع الwindow ويحط الكلام ف نص الصفحه بالظبط

        });
      });



          $('.links li a').click(function () {
              $(this).parent().addClass('active').siblings().removeClass('active'); // parent عشان لما اكون عايز اروح لاي لينك اضغط ع الكلمه نفسها

          });


        $('.bxslider').each(function () {

            $(this).css('paddingTop' , ($(window).height() - $('.bxslider li').height()) / 2 );

        });


        $('.bxslider').bxSlider({
          pager: false

        });

        $('.links li a').click(function () {
          $('html ,body').animate({

            scrollTop:$('#' + $(this).data('value')).offset().top
            } , 1000);



        });


        (function autoSlider() {

          $('.slider .active').each(function () {

            if(!$(this).is(':last-child')){

              $(this).delay(3000).fadeOut(1000 , function () {

                  $(this).removeClass('active').next().addClass('active').fadeIn();


                  autoSlider();
              });


            } else {


              $(this).delay(3000).fadeOut(1000 , function () {

                  $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn();

                    autoSlider();

              });
            }

          });

        }());

      $('#Container').mixItUp();


        $('.shuffled li').click(function () {
            $(this).addClass('selected').siblings().removeClass('selected');

        });

        $('html').niceScroll({

            cursorcolor: '#149da8',

            cursorwidth: '8px',

            cursorborder: '1px solid #149da8',

            cursorborderradius: 0

        });
});
