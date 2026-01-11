const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

// Tự động chạy 4 giây
setInterval(nextSlide, 4000);

// Nút bấm
document.querySelector('.next').onclick = nextSlide;
document.querySelector('.prev').onclick = prevSlide;
