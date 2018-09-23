$(document).ready(function(){
        $('.carousel-slick').slick({
            respondTo : 'window',
            mobileFirst : true,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint : 1200,
                    settings: {
                        prevArrow: '<img src="images/arrow.svg" class="icon-flipped"/>',
                        nextArrow: '<img src="images/arrow.svg" class="arrow-right-img"/>',
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                breakpoint: 768,
                settings: {
                    prevArrow: '<img src="images/arrow.svg" class="icon-flipped"/>',
                    nextArrow: '<img src="images/arrow.svg" class="arrow-right-img"/>',
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                    slidesToScroll: 1
                    }
                },
                {
                breakpoint: 480,
                settings: {
                    prevArrow: '<img src="images/arrow.svg" class="icon-flipped"/>',
                    nextArrow: '<img src="images/arrow.svg" class="arrow-right-img"/>',
                    centerMode: true,
                    centerPadding: '5px',
                    slidesToShow: 3,
                    slidesToScroll: 1
                    }
                },
                {
                breakpoint: 370,
                settings: {
                    prevArrow: '<img src="images/arrow.svg" class="icon-flipped-21"/>',
                    nextArrow: '<img src="images/arrow.svg" class="arrow-right-img"/>',
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                    slidesToScroll: 1
                    }
                }
        ]
        });
        $('#submit-email').click(function(){
            $('#email-box').addClass('d-none');
            $('#email-confirmed').removeClass('d-none');
        });

});