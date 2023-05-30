
export function populatePairingsCarousel(hotSauce) {

    const carouselContainer = document.getElementById("pairings-carousel-container");
    const track = document.querySelector(".carousel)__track");
    const nextButton = document.querySelector(".carousel-button-right");
    const prevButton = document.querySelector(".carousel-button-left");
    const dotsNav = document.querySelector(".carousel-nav");
    const dots = Array.from(dotsNav.children);

    track.innerHTML = "";

    hotSauce.pairings.forEach((pairing, index) => {
        const slide = document.createElement("li");
        slide.classList.add("carousel-slide");
        slide.innerHTML = `<img src="${pairing.image}" alt="Pairing ${index + 1}">`;
        track.appendChild(slide);
    });

    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    // arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = "translateX(-" + targetSlide.style.left + ")";
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
    }
    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove("current-slide");
        targetDot.classList.add("current-slide");
    }

    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        if (targetIndex === 0) {
            prevButton.classList.add("is-hidden");
            nextButton.classList.remove("is-hidden");
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove("is-hidden");
            nextButton.classList.add("is-hidden");
        } else {
            prevButton.classList.remove("is-hidden");
            nextButton.classList.remove("is-hidden");
        }
    }

    // when I click left, move slides to left
    prevButton.addEventListener("click", e => {
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector(".current-slide");
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
    });

    // when I click right, move slides to right
    nextButton.addEventListener("click", e => {
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector(".current-slide");
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    })

    // when I click the nav indicator, move to that slide

    dotsNav.addEventListener("click", e => {
        // what indicator was clicked on?
        const targetDot = e.target.closest("button");

        if (!targetDot) return;

        const currentSlide = track.querySelector(".current-slide");
        const currentDot = dotsNav.querySelector(".current-slide");
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
        hideShowArrows(slides, prevButton, nextButton, targetIndex);

        if (hotSauce) {
            console.log(hotSauce);
            console.log("hello");
            carouselContainer.classList.remove("hide-carousel");
        } else {
            carouselContainer.classList.add("hide-carousel");
        }
    })

}