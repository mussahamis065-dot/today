/* =========================================================
   GIVEN BIRTHDAY WEBSITE
   JavaScript
========================================================= */


/* =========================================================
   1. GET HTML ELEMENTS
========================================================= */

const surpriseBtn = document.getElementById("surpriseBtn");

const messageSection = document.getElementById("message");

const heartsContainer =
    document.getElementById("hearts-container");

const confettiContainer =
    document.getElementById("confetti-container");


/* Lightbox */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");

const photoCards =
    document.querySelectorAll(".photo-card");


/* =========================================================
   2. SURPRISE BUTTON
========================================================= */

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", function () {

        /*
            Scroll to the birthday message
        */

        messageSection.scrollIntoView({
            behavior: "smooth"
        });


        /*
            Launch confetti
        */

        launchConfetti();


        /*
            Create a burst of hearts
        */

        startHeartRain(20);

    });

}


/* =========================================================
   3. CREATE FLOATING HEART
========================================================= */

function createHeart() {

    const heart =
        document.createElement("span");


    /*
        Font Awesome heart icon
    */

    heart.innerHTML =
        '<i class="fa-solid fa-heart"></i>';


    heart.classList.add(
        "floating-heart"
    );


    /*
        Random horizontal position
    */

    heart.style.left =
        Math.random() * 100 + "vw";


    /*
        Random size
    */

    const size =
        12 + Math.random() * 18;

    heart.style.fontSize =
        size + "px";


    /*
        Random animation duration
    */

    const duration =
        6 + Math.random() * 7;

    heart.style.animationDuration =
        duration + "s";


    /*
        Random pink shade
    */

    const heartColors = [

        "#ff5c8a",
        "#ff91ae",
        "#ffb6c9",
        "#ffffff"

    ];


    heart.style.color =
        heartColors[
            Math.floor(
                Math.random() *
                heartColors.length
            )
        ];


    /*
        Add heart to page
    */

    heartsContainer.appendChild(
        heart
    );


    /*
        Remove after animation
    */

    setTimeout(function () {

        heart.remove();

    }, duration * 1000);

}


/* =========================================================
   4. START HEART RAIN
========================================================= */

function startHeartRain(amount = 1) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(function () {

            createHeart();

        }, i * 120);

    }

}


/* =========================================================
   5. CONTINUOUS HEARTS
========================================================= */

setInterval(function () {

    createHeart();

}, 1300);


/* =========================================================
   6. CONFETTI
========================================================= */

function launchConfetti() {


    /*
        Symbols used for confetti
    */

    const symbols = [

        "♥",
        "✦",
        "★",
        "◆",
        "●"

    ];


    /*
        Number of confetti pieces
    */

    const count = 100;


    for (
        let i = 0;
        i < count;
        i++
    ) {

        const piece =
            document.createElement("span");


        piece.classList.add(
            "confetti"
        );


        /*
            Random symbol
        */

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        /*
            Random position
        */

        piece.style.left =
            Math.random() * 100 + "vw";


        /*
            Random animation duration
        */

        piece.style.animationDuration =
            2.2 +
            Math.random() * 2.8 +
            "s";


        /*
            Random delay
        */

        piece.style.animationDelay =
            Math.random() * 0.8 +
            "s";


        /*
            Random size
        */

        piece.style.fontSize =
            8 +
            Math.random() * 14 +
            "px";


        /*
            Random opacity
        */

        piece.style.opacity =
            0.5 +
            Math.random() * 0.5;


        /*
            Add to page
        */

        confettiContainer.appendChild(
            piece
        );


        /*
            Remove after animation
        */

        setTimeout(function () {

            piece.remove();

        }, 5500);

    }

}


/* =========================================================
   7. SCROLL REVEAL ANIMATION
========================================================= */

const revealItems =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealItems.forEach(
    function (item) {

        revealObserver.observe(
            item
        );

    }
);


/* =========================================================
   8. PHOTO LIGHTBOX
========================================================= */

photoCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                /*
                    Get image path
                */

                const image =
                    card.getAttribute(
                        "data-image"
                    );


                /*
                    Put image inside lightbox
                */

                lightboxImage.src =
                    image;


                /*
                    Open lightbox
                */

                lightbox.classList.add(
                    "open"
                );


                lightbox.setAttribute(
                    "aria-hidden",
                    "false"
                );


                /*
                    Prevent background scrolling
                */

                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);


/* =========================================================
   9. CLOSE LIGHTBOX FUNCTION
========================================================= */

function closeImageViewer() {

    lightbox.classList.remove(
        "open"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    /*
        Clear image
    */

    lightboxImage.src = "";


    /*
        Enable scrolling again
    */

    document.body.style.overflow =
        "";

}


/* =========================================================
   10. CLOSE LIGHTBOX BUTTON
========================================================= */

if (closeLightbox) {

    closeLightbox.addEventListener(
        "click",
        closeImageViewer
    );

}


/* =========================================================
   11. CLOSE LIGHTBOX BY CLICKING OUTSIDE IMAGE
========================================================= */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                lightbox
            ) {

                closeImageViewer();

            }

        }
    );

}


/* =========================================================
   12. CLOSE LIGHTBOX WITH ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeImageViewer();

        }

    }
);


/* =========================================================
   13. INITIAL HEART EFFECT
========================================================= */

window.addEventListener(
    "load",
    function () {

        /*
            Create a few hearts
            when website opens
        */

        startHeartRain(8);

    }
);