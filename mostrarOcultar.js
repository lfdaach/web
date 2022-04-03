// Selecting the required elements
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const main_box = document.querySelector(".main_box");
  
// Adding an event listener for the mouse
// click for opening the navigation bar
open.addEventListener("click", () => {
  main_box.classList.add("show-nav");
});
  
// Adding an event listener for the mouse
// click for closing the navigation bar
close.addEventListener("click", () => {
  main_box.classList.remove("show-nav");
});
 // Con esto haremos que al dar click en la imagen "menu.png" muestre u oculte el contenido.