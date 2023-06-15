new Swiper("#integration-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
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

new Swiper("#industries-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        850: {
            slidesPerView: 3,
            spaceBetween:24
        }
    }
});

new Swiper("#stay-secure-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        950: {
            slidesPerView: 2,
            spaceBetween:24
        }
    }
});

new Swiper("#partner-content-swiper", {
    spaceBetween: 16,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

new Swiper("#expertise-swiper", {
    effect: "cards",
    grabCursor: true,
});
