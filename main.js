const burger = document.querySelector('.hamburbur');
const menu  = document.querySelector('.meny');
let burgerChecked = false;
burger.addEventListener("click", function () {
    menu.style.display = "flex";
    burger.style.marginLeft = "40%"
    burger.textContent = "image.jpg"
    burgerChecked = true
})

    burger.addEventListener("dblclick", function () {
        menu.style.display = "none";
        burger.style.marginLeft = "0";
        burger.src  = "titus.jpg"
    });