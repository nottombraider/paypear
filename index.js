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
} );
