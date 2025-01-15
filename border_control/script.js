let slideIndex = 0; // Начинаем с 0, чтобы первый слайд сразу показался
let slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Автоматическая смена слайдов каждые 5 секунд (5000мс)
}


// Начинаем показывать слайды при загрузке страницы
showSlides();





