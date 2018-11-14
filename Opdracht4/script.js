var countSlide1 = Math.floor(Math.random() * 9) + 1;
var countSlide2 = Math.floor(Math.random() * 9) + 1;
var countSlide3 = Math.floor(Math.random() * 9) + 1;

var slide1 = document.getElementById("slideholder1");
var slide2 = document.getElementById("slideholder2");
var slide3 = document.getElementById("slideholder3");


slide1.style.backgroundImage = "url('img/aap" + countSlide1 + ".jpg')";
slide2.style.backgroundImage = "url('img/aap" + countSlide2 + ".jpg')";
slide3.style.backgroundImage = "url('img/aap" + countSlide3 + ".jpg')";

slide1.addEventListener("click", function () {
    slide1.style.backgroundImage = "url('img/aap" + getSlide1() + ".jpg')"
});

slide2.addEventListener("click", function () {
    slide2.style.backgroundImage = "url('img/aap" + getSlide2() + ".jpg')"
});

slide3.addEventListener("click", function () {
    slide3.style.backgroundImage = "url('img/aap" + getSlide3() + ".jpg')"
});

function getSlide1() {
    if (countSlide1 >= 9) {
        countSlide1 = 1;
    } else {
        countSlide1++;
    }
    return countSlide1;
}

function getSlide2() {
    if (countSlide2 >= 9) {
        countSlide2 = 1;
    } else {
        countSlide2++;
    }
    return countSlide2;
}


function getSlide3() {
    if (countSlide3 >= 9) {
        countSlide3 = 1;
    } else {
        countSlide3++;
    }
    return countSlide3;
}


