"use strict";

function scrollDirection () {
    var scrollDirections = document.querySelector('.main__directions');
    scrollDirections.scrollIntoView({
        block: "center",
        inline: 'nearest',
        behavior: 'smooth'
    });
}

function scrollCompany () {
    var scrollCompany = document.querySelector('.about__company');
    scrollCompany.scrollIntoView({
        block: "center",
        inline: 'nearest',
        behavior: 'smooth'
    });
}

function scrollBenefits() {
    var scrollBenefits = document.querySelector('.benefits');
    scrollBenefits.scrollIntoView({
        block: "start",
        inline: 'nearest',
        behavior: 'smooth'
    });
}

function scrollSteps() {
    var scrollSteps = document.querySelector('.steps__work');
    scrollSteps.scrollIntoView({
        block: "center",
        inline: 'nearest',
        behavior: 'smooth'
    });
}
// Mobility block 
const mouseInMobility = document.querySelector('.mobility_block');
mouseInMobility.addEventListener('mouseover', function (event){
    var mobility_block = document.querySelector('.mobility');
    mobility_block.classList.add('benefits-show');
}) 

mouseInMobility.addEventListener('mouseout', function (event) {
    var mobility_block = document.querySelector('.mobility');
    mobility_block.classList.remove('benefits-show');
});

// Reliability block
const mouseInReliability = document.querySelector('.reliability_block');
mouseInReliability.addEventListener('mouseover', function (event){
    var reliability_block = document.querySelector('.reliability');
    reliability_block.classList.add('benefits-show');
}) 

mouseInReliability.addEventListener('mouseout', function (event) {
    var reliability_block = document.querySelector('.reliability');
    reliability_block.classList.remove('benefits-show');
});

// Quality block
const mouseInQuality = document.querySelector('.quality_block');
mouseInQuality.addEventListener('mouseover', function (event){
    var quality_block = document.querySelector('.quality');
    quality_block.classList.add('benefits-show');
}) 

mouseInQuality.addEventListener('mouseout', function (event) {
    var quality_block = document.querySelector('.quality');
    quality_block.classList.remove('benefits-show');
});

// Professionalismi block
const mouseInProfessionalismi = document.querySelector('.professionalismi_block');
mouseInProfessionalismi.addEventListener('mouseover', function (event){
    var professionalismi_block = document.querySelector('.professionalismi');
    professionalismi_block.classList.add('benefits-show');
}) 

mouseInProfessionalismi.addEventListener('mouseout', function (event) {
    var professionalismi_block = document.querySelector('.professionalismi');
    professionalismi_block.classList.remove('benefits-show');
});

// Profitability block
const mouseInProfitability = document.querySelector('.profitability_block');
mouseInProfitability.addEventListener('mouseover', function (event){
    var professionalismi_block = document.querySelector('.profitability');
    professionalismi_block.classList.add('benefits-show');
}) 

mouseInProfitability.addEventListener('mouseout', function (event) {
    var professionalismi_block = document.querySelector('.profitability');
    professionalismi_block.classList.remove('benefits-show');
});

// Form

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', formSend);

    async function formSend (e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {

        } else {
            
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError (input)

            if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError (input);
                    error++;
                    
                }
            }
        }

        return error;
    }

    function formAddError (input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError (input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form_question');

    form.addEventListener('submit', formSend);

    async function formSend (e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {

        } else {
            
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-qustion');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError (input)

            if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError (input);
                    error++;
                    
                }
            }
        }

        return error;
    }

    function formAddError (input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError (input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('partner__form');

    form.addEventListener('submit', formSend);

    async function formSend (e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {

        } else {
            
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-partner');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError (input)

            if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError (input);
                    error++;
                    
                }
            }
        }

        return error;
    }

    function formAddError (input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError (input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
})
// slider

$(document).ready(function(){
    $('.slider__work').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });  
});

$(document).ready(function(){
    $('.slider_partners').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });  
});

function popupOpen() {
    var open = document.querySelector('.popup');

    open.classList.add('popup__visible');

    document.body.style.overflow = 'hidden';
}

function popupClose() {
    var close = document.querySelector('.popup__visible');
    close.classList.remove('popup__visible');
    document.body.style.overflow = 'visible';
}

function popupOpen() {
    var open = document.querySelector('.popup');

    open.classList.add('popup__visible');

    document.body.style.overflow = 'hidden';
}

function popupClose() {
    var close = document.querySelector('.popup__visible');
    close.classList.remove('popup__visible');
    document.body.style.overflow = 'visible';
}


function popupOpenGif() {
    var open = document.querySelector('.popup-gifts');

    open.classList.add('popup__visible');

    document.body.style.overflow = 'hidden';
}

function popupClosGif() {
    var close = document.querySelector('.popup__visible');
    close.classList.remove('popup__visible');
    document.body.style.overflow = 'visible';
}