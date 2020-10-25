

/*
const displayedImage = document.querySelector(".displayedImage");

displayedImage.addEventListener("mouseenter", function (event) {
    event.target.setAttribute("src", "img/Gallery/stadt2.jpg")
});

displayedImage.addEventListener("mouseleave", function (event) {
    event.target.setAttribute("src", "img/Gallery/stadt1.jpg")
});

*/
/* war eine gute Idee, geht aber einfacher: erstelle die Gallerie mit javascript füge sie dann in Dom ein.
const allDisplayedImages = document.querySelectorAll(".displayedImage");
*/


const gallery = document.querySelector(".cropped-img");

let croppedImages = ["berg", "stadt", "abstrakt", "natur"];


for (let i = 0; i < croppedImages.length; i++){
    const newImage = document.createElement("img");
    newImage.setAttribute("src", "img/Gallery/" + croppedImages[i] + ".jpg");
    newImage.setAttribute("class", "displayedImage");
    newImage.setAttribute("id",croppedImages[i]) 
    gallery.appendChild(newImage);

    let displayedImage = document.querySelector("#" + croppedImages[i]);

displayedImage.addEventListener("mouseenter", function (event) {
    event.target.setAttribute("src", "img/Gallery/" + croppedImages[i] + "1.jpg")
});

displayedImage.addEventListener("mouseleave", function (event) {
    event.target.setAttribute("src", "img/Gallery/" + croppedImages[i] + ".jpg")
});
}








