const menu = document.querySelector("#menu");
const myNav = document.querySelector("#myNav");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("fa-xmark");
    myNav.classList.toggle("expand");
});