// console.log("Самооценка trave#1:\n1. Вёрстка валидная - 10/10\n2. Вёрстка семантическая - 20/20\n3. Вёрстка соответствует макету - 48/48\n4. Требования к css - 12/12\n5. Интерактивность, реализуемая через css - 20/20");

// console.log("Самооценка trave#2: 79/85\nНе выполненные/не засчитанные пункты:\n1) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна\nЧастично выполненные пункты:\n1) ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям (все, кроме Account, она пока просто закрывает меню)");

console.log("Самооценка trave#3: 115/125\nНе выполненные/не засчитанные пункты:\n1) Анимации плавного перемещения для слайдера\n");

// Burger menu
const burger = document.querySelector(".header-burger");
const navigation = document.querySelector(".header-list");
const bodyWrapper = document.querySelector(".body-wrapper");
const navigationItems = document.querySelectorAll(".header-list-item-link");

burger.addEventListener('click', () => {
    burger.classList.toggle("header-burger-close");
    navigation.classList.toggle("header-list-active");
    bodyWrapper.classList.toggle("body-wrapper-active");
    }
);

bodyWrapper.addEventListener('click', () => {
    burger.classList.remove("header-burger-close");
    navigation.classList.remove("header-list-active");
    bodyWrapper.classList.remove("body-wrapper-active");
    modalWindow.classList.remove("modal-window-active");
    modalWindowReg.classList.remove("modal-window-active");
    }
);

for (let i = 0; i < navigationItems.length; i++) {
    navigationItems[i].addEventListener('click', () => {
        burger.classList.toggle("header-burger-close");
        navigation.classList.toggle("header-list-active");
        bodyWrapper.classList.toggle("body-wrapper-active");
    });
}


//Modal window
const modalWindow = document.querySelector(".modal-window-login");
const buttonLogin = document.querySelector(".header-btn");
const mobileLogin = document.querySelector(".mobile-login");
const linkReg = document.querySelector(".modal-footer-link-reg");

function modalWindowOpen(button) {
    button.addEventListener('click', () => {
        modalWindow.classList.toggle("modal-window-active");
        bodyWrapper.classList.toggle("body-wrapper-active");
    });
}
modalWindowOpen(buttonLogin);
modalWindowOpen(mobileLogin);


linkReg.addEventListener('click', () => {
    const modalButton = document.querySelectorAll(".modal-button");
    const modalOr = document.querySelector(".modal-or");
    const modalLinkForgot = document.querySelector(".modal-link-forgot");
    if (!modalOr.classList.contains("modal-window-change")) {
        document.getElementById("modal-title").innerHTML = "Create account";
        document.getElementById("singBtn").innerHTML = "Sign Up";
        document.getElementById("modal-footer-span").innerHTML = "Already have an account? ";
        document.getElementById("modal-footer-link").innerHTML = "Log in";
        for (let i = 0; i < modalButton.length; i++) {
            modalButton[i].classList.add("modal-window-change");
        }
        modalOr.classList.add("modal-window-change");
        modalLinkForgot.classList.add("modal-window-change");
    } else {
        document.getElementById("modal-title").innerHTML = "Log in to your account";
        document.getElementById("singBtn").innerHTML = "Sign In";
        document.getElementById("modal-footer-span").innerHTML = "Don’t have an account? ";
        document.getElementById("modal-footer-link").innerHTML = "Register";
        for (let i = 0; i < modalButton.length; i++) {
            modalButton[i].classList.remove("modal-window-change");
        }
        modalOr.classList.remove("modal-window-change");
        modalLinkForgot.classList.remove("modal-window-change");
    }
});

document.querySelector('#inputForm').onsubmit = function () {
    alert(`Email: ${this['email'].value}, Password: ${this['password'].value}`);
}


// slider
const sliderBtnPrev = document.querySelector(".destinations-slider-btn-prev");
const sliderBtnNext = document.querySelector(".destinations-slider-btn-next");
const slider = document.querySelector(".destinations-slider-wrapper");
const slides = document.querySelectorAll(".destinations-slider-item");
const slidesDots = document.querySelectorAll(".destinations-slider-button");

let positionSlide = 0;

function clickSlideNext () {
    if (window.innerWidth > 576) {
        sliderBtnNext.addEventListener('click', () => {
            positionSlide++;
            if (positionSlide === 1) {
                slider.classList.add("destinations-slider-right");
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.add("destinations-slider-button-active");
            } else if (positionSlide === 2) {
                slider.classList.remove("destinations-slider-right");
                slider.classList.add("destinations-slider-left");
                slidesDots[0].classList.add("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.remove("destinations-slider-button-active");
            } else if (positionSlide === -1 && slider.classList.contains("destinations-slider-right")) {
                slider.classList.remove("destinations-slider-right");
                slider.classList.add("destinations-slider-left");
                slidesDots[0].classList.add("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.remove("destinations-slider-button-active");
            } else {
                slider.classList.remove("destinations-slider-left");
                positionSlide = 0;
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.add("destinations-slider-button-active");
                slidesDots[2].classList.remove("destinations-slider-button-active");
            }
        })
    } else {
        slider.classList.remove("destinations-slider-right");
        slider.classList.add("destinations-slider-left");
        sliderBtnNext.addEventListener('click', () => {
            positionSlide++;
            if (positionSlide === 1) {
                slider.classList.remove("destinations-slider-left");
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.add("destinations-slider-button-active");
                slidesDots[2].classList.remove("destinations-slider-button-active");
            } else if (positionSlide === 2) {
                slider.classList.add("destinations-slider-right");
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.add("destinations-slider-button-active");
            } else if (positionSlide === -1) {
                slider.classList.add("destinations-slider-right");
                slider.classList.remove("destinations-slider-left");
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.add("destinations-slider-button-active");
            } else {
                slider.classList.add("destinations-slider-left");
                slider.classList.remove("destinations-slider-right");
                positionSlide = 0;
                slidesDots[0].classList.add("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.remove("destinations-slider-button-active");
            }
        })
    }

    
}
clickSlideNext();

function clickSlidePrev () {
    if (window.innerWidth > 576) {
        sliderBtnPrev.addEventListener('click', () => {
            positionSlide--;
            if (positionSlide === -1) {
                slider.classList.add("destinations-slider-left");
                slidesDots[0].classList.add("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.remove("destinations-slider-button-active");
            } else if (positionSlide === -2) {
                slider.classList.remove("destinations-slider-left");
                slider.classList.add("destinations-slider-right");
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.add("destinations-slider-button-active");
            } else if (positionSlide === 1 && slider.classList.contains("destinations-slider-left")) {
                slider.classList.remove("destinations-slider-left");
                slider.classList.add("destinations-slider-right");
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.add("destinations-slider-button-active");
            } else {
                slider.classList.remove("destinations-slider-right");
                positionSlide = 0;
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.add("destinations-slider-button-active");
                slidesDots[2].classList.remove("destinations-slider-button-active");
            }
        })
    } else {
        slider.classList.remove("destinations-slider-right");
        slider.classList.add("destinations-slider-left");
        sliderBtnPrev.addEventListener('click', () => {
            positionSlide--;
            if (positionSlide === -1) {
                slider.classList.remove("destinations-slider-left");
                slider.classList.add("destinations-slider-right");
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.add("destinations-slider-button-active");
            } else if (positionSlide === -2) {
                slider.classList.remove("destinations-slider-left");
                slider.classList.remove("destinations-slider-right");
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.add("destinations-slider-button-active");
                slidesDots[2].classList.remove("destinations-slider-button-active");
            } else if (positionSlide === 1 && slider.classList.contains("destinations-slider-right")) {
                slider.classList.remove("destinations-slider-left");
                slider.classList.remove("destinations-slider-right");
                slidesDots[0].classList.remove("destinations-slider-button-active");
                slidesDots[1].classList.add("destinations-slider-button-active");
                slidesDots[2].classList.remove("destinations-slider-button-active");
            } else {
                slider.classList.add("destinations-slider-left");
                slider.classList.remove("destinations-slider-right");
                positionSlide = 0;
                slidesDots[0].classList.add("destinations-slider-button-active");
                slidesDots[1].classList.remove("destinations-slider-button-active");
                slidesDots[2].classList.remove("destinations-slider-button-active");
            }
        })


    }
}
clickSlidePrev();

function clockDots () {
    if (window.innerWidth > 576) {
        slidesDots[0].addEventListener('click', () => {
            slidesDots[0].classList.add("destinations-slider-button-active");
            slidesDots[1].classList.remove("destinations-slider-button-active");
            slidesDots[2].classList.remove("destinations-slider-button-active");
            slider.classList.remove("destinations-slider-right");
            slider.classList.add("destinations-slider-left");
        })
        slidesDots[1].addEventListener('click', () => {
            slidesDots[0].classList.remove("destinations-slider-button-active");
            slidesDots[1].classList.add("destinations-slider-button-active");
            slidesDots[2].classList.remove("destinations-slider-button-active");
            slider.classList.remove("destinations-slider-right");
            slider.classList.remove("destinations-slider-left");
        })
        slidesDots[2].addEventListener('click', () => {
            slidesDots[0].classList.remove("destinations-slider-button-active");
            slidesDots[1].classList.remove("destinations-slider-button-active");
            slidesDots[2].classList.add("destinations-slider-button-active");
            slider.classList.add("destinations-slider-right");
            slider.classList.remove("destinations-slider-left");
        })
    } else {
        slidesDots[0].classList.add("destinations-slider-button-active");
        slidesDots[1].classList.remove("destinations-slider-button-active");
        slider.classList.remove("destinations-slider-right");
        slider.classList.add("destinations-slider-left");
        slidesDots[0].addEventListener('click', () => {
            slidesDots[0].classList.add("destinations-slider-button-active");
            slidesDots[1].classList.remove("destinations-slider-button-active");
            slidesDots[2].classList.remove("destinations-slider-button-active");
            slider.classList.remove("destinations-slider-right");
            slider.classList.add("destinations-slider-left");
        })
        slidesDots[1].addEventListener('click', () => {
            slidesDots[0].classList.remove("destinations-slider-button-active");
            slidesDots[1].classList.add("destinations-slider-button-active");
            slidesDots[2].classList.remove("destinations-slider-button-active");
            slider.classList.remove("destinations-slider-right");
            slider.classList.remove("destinations-slider-left");
        })
        slidesDots[2].addEventListener('click', () => {
            slidesDots[0].classList.remove("destinations-slider-button-active");
            slidesDots[1].classList.remove("destinations-slider-button-active");
            slidesDots[2].classList.add("destinations-slider-button-active");
            slider.classList.add("destinations-slider-right");
            slider.classList.remove("destinations-slider-left");
        })
    }
}
clockDots();

