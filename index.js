(function() {
    emailjs.init('s4A9YA0fh6oUVAPy6');
})();

new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    emailjs.sendForm('default_service', 'template_joxk39f', event.target)
        .then(
            () => {
                document.getElementById('contact-form').reset();

                const toastDiv = document.getElementById('toast')
                toastDiv.className = 'show'
                toastDiv.innerText = 'Message sent successfully. Soon we will contact you.'

                setTimeout(() => {
                    toastDiv.className = toastDiv.className.replace("show", "");
                }, 4000);
            },
            () => {
                document.getElementById('contact-form').reset();

                const toastDiv = document.getElementById('toast')
                toastDiv.className = 'show'
                toastDiv.innerText = 'Oops, something went wrong. Please try again.'

                setTimeout(() => {
                    toastDiv.className = toastDiv.className.replace("show", "");
                }, 4000);
            }
        );
} )



// const startCarousel = () => {
//     const slides = document.getElementsByClassName('carousel-item');
//
//     if(!slides.length) return null;
//
//     const addActive = (slide) => slide.classList.add('active');
//     const removeActive = (slide) => slide.classList.remove('active');
//
//     addActive(slides[0]);
//
//     setInterval( () => {
//         for (let index = 0; index < slides.length; index++) {
//             if (index + 1 === slides.length) {
//                 addActive(slides[0]);
//
//                 slides[0].style.zIndex = "10";
//
//                 setTimeout(removeActive, 200, slides[index]);
//
//                 break;
//             }
//
//             if (slides[index].classList.contains('active')) {
//                 slides[index].removeAttribute('style');
//
//                 setTimeout(removeActive, 350, slides[index]);
//
//                 addActive(slides[index + 1]);
//
//                 break;
//             }
//         }
//     }, 7000);
// }
//
// window.onload = () => {
//     startCarousel();
//
//
// }
