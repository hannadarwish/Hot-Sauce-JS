
export function populatePairingsCarousel(hotSauce) {

    const pairingText = document.querySelector("#pairings-carousel-container .pairing-text");
    const carouselContainer = document.getElementById("pairings-carousel-container");
    const track = document.querySelector(".carousel-track");
    const nextButton = document.querySelector(".carousel-button-right");
    const prevButton = document.querySelector(".carousel-button-left");
    const dotsNav = document.querySelector(".carousel-nav");
    const dots = Array.from(dotsNav.children);

    track.innerHTML = "";

    //pairing text
    pairingText.textContent = `Try ${hotSauce.name} with... `;

    if (pairingText) {
        pairingText.classList.remove("is-hidden");
    } else {
        pairingText.classList.add("is-hidden");
    }

    console.log(hotSauce.pairings);
    hotSauce.pairings.forEach((pairing, index) => {
        const slide = document.createElement("li");
        slide.classList.add("carousel-slide");
        
        if (index === 0) {
            slide.classList.add("current-slide");
            slide.style.left = "0px";
        }
        
        slide.style.backgroundImage = `url(${pairing.image})`;
        // debugger;
        track.appendChild(slide);
    });

    const slides = Array.from(track.children);
    // const slideWidth = slides[0].getBoundingClientRect().width;

    // arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
        // debugger;
        if (index === 0) {
            slide.style.left = "0px";
        } else if(index === 1){
            slide.style.left = "280px";
        } else {
            slide.style.left = "560px";
        }
    };

    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        // debugger;
        track.style.transform = "translateX(-" + targetSlide.style.left + ")";
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
        // debugger
    }

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove("current-button");
        targetDot.classList.add("current-button");
    }

    const hideShowArrows = (prevButton, nextButton, targetIndex) => {
        if (targetIndex === 0) {
            prevButton.classList.add("is-hidden");
            nextButton.classList.remove("is-hidden");
        } else if (targetIndex === 2) {
            prevButton.classList.remove("is-hidden");
            nextButton.classList.add("is-hidden");
        } else if (targetIndex === 1) {
            prevButton.classList.remove("is-hidden");
            nextButton.classList.remove("is-hidden");
        }
    }

    // when I click left, move slides to left
    prevButton.addEventListener("click", e => {
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector(".current-button");
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShowArrows(prevButton, nextButton, prevIndex);
    });

    // when I click right, move slides to right
    nextButton.addEventListener("click", (e) => {
        const currentSlide = document.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector(".current-button");
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);
        // debugger;
        // console.log(track);
        // console.log(currentSlide);
        // console.log(nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(prevButton, nextButton, nextIndex);
    })

    // when I click the nav indicator, move to that slide
    dotsNav.addEventListener("click", e => {
        // what indicator was clicked on?
        const targetDot = e.target;

        if (!targetDot) return;
        // debugger
        const currentSlide = track.querySelector(".current-slide");
        const currentDot = dotsNav.querySelector(".current-button");
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        console.log("current-slide", currentSlide);
        console.log("target-slide", targetSlide);

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
        hideShowArrows(prevButton, nextButton, targetIndex);
    })
    

    if (hotSauce) {
        carouselContainer.classList.remove("is-hidden");
    } else {
        carouselContainer.classList.add("is-hidden");
    }
}