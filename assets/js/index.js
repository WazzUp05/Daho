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
    const toggleButtons = document.querySelectorAll('.button-show-more');

    for (let toggleButton of toggleButtons) {
        toggleButton.addEventListener('click', function () {
            const textElement = this.previousElementSibling;
            console.log(textElement);
            if (textElement.style.overflow !== 'visible') {
                textElement.style.overflow = 'visible';
                textElement.style.WebkitLineClamp = 'none';
                this.innerHTML = 'Свернуть';
            } else {
                textElement.style.overflow = 'hidden';
                textElement.style.WebkitLineClamp = '4';
                this.innerHTML = 'Показать полный отзыв';
            }
        });
    }

    $('.cart-product__options-option').click(function () {
        $('.cart-product__options-option').removeClass('active');
        $(this).addClass('active');
    });

    $('.cart-product__options-color').click(function () {
        $('.cart-product__options-color').removeClass('active');
        $(this).addClass('active');
    });

    // Показ и скрытие блока рассрочки
    const radioInputsPay = document.querySelectorAll('.input-option-pay');

    radioInputsPay.forEach(input => {
        input.addEventListener('change', showPaymenByInstalments);
    });

    function showPaymenByInstalments() {
        const selectedValue = this.value;
        if (selectedValue === 'option-1') {
            $('.form__credit').show();
        } else {
            $('.form__credit').hide();
        }
    }

    // Расчет рассрочки
    let fullSumProduct = 20000000;

    const radioInputs = document.querySelectorAll('.custom-radio-input');
    const result = document.querySelector('.form__credit-result-wrapper');

    // let month;

    radioInputs.forEach(input => {
        // if (input.checked) {
        //     if (input.value === '3') {
        //         month = 3;
        //     } else if (input.value === '6') {
        //         month = 6;
        //     } else if (input.value === '12') {
        //         month = 12;
        //     } else if (input.value === '24') {
        //         month = 24;
        //     }
        // }
        input.addEventListener('click', calculateInstallment);
    });

    function calculateInstallment() {
        const selectedValue = this.value;

        let sum = fullSumProduct;
        let installment;

        switch (selectedValue) {
            case '3':
                installment = sum / 3;
                break;
            case '6':
                installment = sum / 6;
                break;
            case '12':
                installment = sum / 12;
                break;
            case '24':
                installment = sum / 24;
                break;
            default:
                installment = sum / 3;
        }

        result.innerHTML = `Ежемесячный платёж: <div class="form__credit-result">${Intl.NumberFormat('ru-RU').format(
            Math.floor(installment)
        )} сум/мес</div>`;
    }

    $('#delivery-tab').on('click', function () {
        if ($(this).hasClass('active')) {
            $('.cart-info').show();
        }
    });
    $('#pickup-tab').on('click', function () {
        if ($(this).hasClass('active')) {
            $('.cart-info').hide();
        }
    });

    //
    $('#card-number').mask('0000 0000 0000 0000');
    $('#valid-until').mask('00/00');
    $('#cvv').mask('000');
});
