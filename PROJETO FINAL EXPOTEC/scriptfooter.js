document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : itemCount - 1;
        updateCarousel();
    });

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
    });
});
