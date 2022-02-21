//header
document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию

    const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
      const header = document.querySelector('.header') // находим header и записываем в константу

      let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
      let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

      window.addEventListener('scroll', () => { // при прокрутке страницы

        currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу

        const headerHidden = () => header.classList.contains('header_hidden') // узнаем скрыт header или нет

        if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
          header.classList.add('header_hidden') // то скрываем header
        }
        if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
        header.classList.remove('header_hidden') // то отображаем header
        }
        prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
})

    }

    onScrollHeader() // вызываем основную функцию onScrollHeader

    });

// Carousel
{
    "use strict"
    var myCarousel = document.querySelector('#carouselExampleIndicators')
    var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: true,
    pause: "hover",
    keyboard: true
})
//left-side
initImg('#test img', [
    '../img/bgimg_2.jpg', 
    '../img/bgimg_5.jpg',  
    '../img/bgimg_10.jpg'
]); 
function initImg(selector, srcArr) {
    const img = document.querySelector(selector); 
    Object.assign(img, {
        buf: Object.assign(new Image(), { img }), 
        srcArr: [...srcArr], 
        changeInterval: 7e3,
        bufIdx: 0,
        change: function () {
        this.style.animationName = 'img-in'; 
        this.src = this.buf.src || this.nextImage(); 
        this.buf.src = this.nextImage(); 
    }, 
    nextImage: function () {
        this.bufIdx = ++this.bufIdx < this.srcArr.length ? this.bufIdx : 0;
        return this.srcArr[this.bufIdx];
    }
    }); 
    img.buf.addEventListener('load', loadHandler); 
    img.addEventListener('animationend', animEndHandler); 
    img.change(); 
    return img; 

    function loadHandler() {
        setTimeout(
        () => this.img.style.animationName = 'img-out', 
        this.img.changeInterval 
    ); 
    }
    function animEndHandler({ animationName }) {
        if (animationName === 'img-out') 
        this.change(); 
    }
}

//right-side
initImg('#test1 img', [
    '../img/bgimg_4.jpg',  
    '../img/bgimg_8.jpg', 
    '../img/bgimg_11.jpg'
]); 
function initImg(selector, srcArr) {
    const img = document.querySelector(selector); 
    Object.assign(img, {
        buf: Object.assign(new Image(), { img }), 
        srcArr: [...srcArr], 
        changeInterval: 7e3,
        bufIdx: 0,
        change: function () {
        this.style.animationName = 'img-in'; 
        this.src = this.buf.src || this.nextImage(); 
        this.buf.src = this.nextImage(); 
    }, 
    nextImage: function () {
        this.bufIdx = ++this.bufIdx < this.srcArr.length ? this.bufIdx : 0;
        return this.srcArr[this.bufIdx];
    }
    }); 
    img.buf.addEventListener('load', loadHandler); 
    img.addEventListener('animationend', animEndHandler); 
    img.change(); 
    return img; 

    function loadHandler() {
        setTimeout(
        () => this.img.style.animationName = 'img-out', 
        this.img.changeInterval 
    ); 
    }
    function animEndHandler({ animationName }) {
        if (animationName === 'img-out') 
        this.change(); 
    }
}
}


