document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const openingAnimation = document.querySelector(".opening-animation");
        openingAnimation.classList.add("hide-animation");
    }, 3000); // Adjust the time (in milliseconds) for how long the opening animation should display.
});
