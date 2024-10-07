function slider() {
    // slider ==================================================================================================

    // const slides = document.querySelectorAll(".offer__slide"),
    //     next = document.querySelector(".offer__slider-next"),
    //     prev = document.querySelector(".offer__slider-prev");

    // let current = document.getElementById("current"),
    //     total = document.getElementById("total");

    // let slideIndex = 1;

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach((slide) => (slide.style.display = "none"));
    //     slides[slideIndex - 1].style.display = "block";
    //     changeCurrent();
    //     changeTotal();
    // }

    // function changeSlideNext(n) {
    //     showSlides((slideIndex += n));
    // }
    // function changeSlidePrev(n) {
    //     showSlides((slideIndex += n));
    // }

    // function changeCurrent() {
    //     if (slideIndex < 10) {
    //         current.textContent = "0" + slideIndex;
    //     }
    // }
    // function changeTotal() {
    //     if (slides.length < 10) {
    //         total.textContent = "0" + slides.length;
    //     }
    // }

    // next.addEventListener("click", () => changeSlideNext(1));
    // prev.addEventListener("click", () => changeSlidePrev(-1));

    // showSlides(slideIndex);

    // slider ==================================================================================================
    const slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector(".offer__slider"),
        next = document.querySelector(".offer__slider-next"),
        prev = document.querySelector(".offer__slider-prev"),
        slidersWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner");
    // const width = window.getComputedStyle(slidesField).width ;
    const width = slidersWrapper.clientWidth;

    let slideIndex = 1;
    let offset = 0;

    let current = document.getElementById("current"),
        total = document.getElementById("total");

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s transform";

    slidersWrapper.style.overflow = "hidden";

    slides.forEach((slide) => {
        slide.style.width = width + "px";
    });

    next.addEventListener("click", () => {
        if (offset == width * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += width;
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex += 1;
        }
        dots.forEach((el) => (el.style.opacity = 0.5));
        dots[slideIndex - 1].style.opacity = 1;

        changeCurrent();
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = width * (slides.length - 1);
        } else {
            offset -= width;
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex -= 1;
        }

        dots.forEach((el) => (el.style.opacity = 0.5));
        dots[slideIndex - 1].style.opacity = 1;

        changeCurrent();
    });

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    function changeCurrent() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }
    function changeTotal() {
        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
        } else {
            total.textContent = slides.length;
        }
    }
    changeCurrent();
    changeTotal();

    //  pagination

    const dots = [];
    const indicators = document.createElement("ol");
    indicators.classList.add("carousel-indicators");

    slides.forEach((el, i) => {
        const dot = document.createElement("li");
        dot.classList.add("carousel-dot");
        dot.setAttribute("data-slide-to", i + 1);

        indicators.append(dot);

        if (i == 0) {
            dot.style.opacity = 1;
        }

        dots.push(dot);
    });

    slider.append(indicators);

    dots.forEach((dot, i) => {
        let index = i + 1;
        dot.addEventListener("click", (event) =>
            changeSlidePogination(event, index)
        );
    });

    function changeSlidePogination(e, index) {
        // const slideTo = e.target.getAttribute("data-slide-to");
        slideIndex = index;

        // offset = width * (slideTo - 1);
        offset = width * (index - 1);
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach((dot) => (dot.style.opacity = ".5"));
        dots[slideIndex - 1].style.opacity = 1;
    }
}

export default slider;
