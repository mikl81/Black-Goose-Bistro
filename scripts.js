$(document).ready(() => {

    $(".prev").click(() => { plusSlides(-1) })
    $(".next").click(() => { plusSlides(1) })


    let slideIndex = 0;
    showSlides(slideIndex);

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function updateArrows(n) {
        console.log(slideIndex)
        switch (n) {
            case 0:
                $(".prev").css("color", "black");
                break;
            case 1:
                $(".prev").css("color", "white");
                break;
            case 2:
                $(".prev").css("color", "white");
                break;
            default:
                $(".prev").css("color", "white");
        }

    }

    function showSlides(n) {
        let i;
        let slides = $(".slide")
        if (n >= slides.length) {
            slideIndex = 0
        }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "block";

        //updateArrows(slideIndex);
    }
});