$('.team-carousel').slick(

    {
        arrows: false,
        autoplay: true,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }

        ]
    }


);