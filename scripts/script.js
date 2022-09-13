"use strict"
const slider = document.querySelector("#slider")
const dotContainer = document.querySelector('.slider__dots')
const slides = document.querySelectorAll("#slide")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
let curSlide = 0
const maxSlide = slides.length


const year = document.getElementById('year')
const date = new Date().getFullYear();
year.innerText = date;

const createDots = function () {
    slides.forEach((_, i) => {
       dotContainer.insertAdjacentHTML('beforeend', `<p href="#" class="slider__dot" data-slide="${i}"></p>`);
    });
 };
 
 createDots(); //Creating dots for slider


 const activateDot = function(slide){
    document.querySelectorAll('.slider__dot').forEach(dot => {dot.classList.remove('slider__dot_active')});
 
    document.querySelector(`.slider__dot[data-slide="${slide}"]`).classList.add('slider__dot_active');
 }
 
 activateDot(0);

const init = (slide) => {
    slides.forEach((e, i) => {
        e.style.transform = `translateX(${180 * (i - slide)}%)`
    })
}
const nextSlide = () => {
    if(curSlide === maxSlide - 1) {
        curSlide = 0
    } else {
        curSlide++
    }
    init(curSlide)
    activateDot(curSlide)
}
const prevSlide = () => {
    if(curSlide === 0) {
        curSlide = maxSlide - 1
    } else {
        curSlide--
    }
    init(curSlide)
    activateDot(curSlide)
}

// первый вызов инита 
init(curSlide)

dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('slider__dot')) {  // проверяешь что нажал именно на точку из всего контейнера
       const {slide} = e.target.dataset; // получаешь номер на какую точку нажал
       init(slide); // переходишь на слайд
       activateDot(slide); // меняешь отображение активной кнопки
    }
 })
prev.addEventListener("click", prevSlide)
next.addEventListener("click", nextSlide)

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
 
    if (e.key === 'ArrowRight') nextSlide();
 })



