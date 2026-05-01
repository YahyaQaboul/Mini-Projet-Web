document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        let currentIndex = 0;
        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 3000);
    });

    const places = document.querySelectorAll('.place');
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    places.forEach(place => {
        place.style.opacity = "0";
        place.style.transform = "translateY(50px)";
        place.style.transition = "all 0.8s ease-out";
        observer.observe(place);
    });
});