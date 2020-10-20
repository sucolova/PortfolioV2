const displayedImage = document.querySelector(".displayed-img");


displayedImage.addEventListener("mouseenter", function (event) {
    event.target.setAttribute("src", "img/Gallery/pic2.jpg")
});

displayedImage.addEventListener("mouseleave", function (event) {
    event.target.setAttribute("src", "img/Gallery/pic1.jpg")
});



