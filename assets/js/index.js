$(document).ready(function () {
    $('.main-slider').slick({
        dots: true,
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
    $('.cart-product__product-slider').slick({
        dots: true,
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
    $('.popular__item-slider').slick({
        dots: true,
        autoplay: false,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
    const textElement = document.getElementById('text');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {
        if (textElement.style.overflow !== 'visible') {
            textElement.style.overflow = 'visible';
            textElement.style.WebkitLineClamp = 'none';
            toggleButton.innerHTML = 'Show Less';
        } else {
            textElement.style.overflow = 'hidden';
            textElement.style.WebkitLineClamp = '3';
            toggleButton.innerHTML = 'Show More';
        }
    });
});
// Напиши скрипт который будет скрывать текст до 3х строк, а при нажатии на кнопку показывать полностью
