(function() {
    emailjs.init('s4A9YA0fh6oUVAPy6');
})();

const startCarousel = () => {
    const slides = document.getElementsByClassName('carousel-item');
    const addActive = (slide) => slide.classList.add('active');
    const removeActive = (slide) => slide.classList.remove('active');

    addActive(slides[0]);

    setInterval( () => {
        for (let index = 0; index < slides.length; index++) {
            if (index + 1 === slides.length) {
                addActive(slides[0]);

                slides[0].style.zIndex = "10";

                setTimeout(removeActive, 200, slides[index]);

                break;
            }

            if (slides[index].classList.contains('active')) {
                slides[index].removeAttribute('style');

                setTimeout(removeActive, 350, slides[index]);

                addActive(slides[index + 1]);

                break;
            }
        }
    }, 7000);
}

window.onload = () => {
    startCarousel();

    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();

        emailjs.sendForm('default_service', 'template_joxk39f', event.target)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    } )
}
