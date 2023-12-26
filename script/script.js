document.querySelector('#smart_board').addEventListener("click", () => {
    if (window.getComputedStyle(document.querySelector('#smart_board')).backgroundImage.endsWith('smart_board_OFF.png\")')) {
        document.querySelector('#smart_board').style.backgroundImage = "url(img/smart_board_ON.png)"
    } else {
        document.querySelector('#smart_board').style.backgroundImage = "url(img/smart_board_OFF.png)"
    }
})

const typed = new Typed('h2', {
    strings: ["Добро пожаловать в мультимедийный парк профориентации «Сфера»!"],
    typeSpeed: 50,
    cursorChar: "",
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    grabCursor: true,
    loopAddBlankSlides: true,
    autoplay: {
        delay: "5000"
    }
})