const menu = document.querySelector(".menu");
const headerMobile = document.querySelector(".header__navbar-mobile");

menu.addEventListener("click", ()=>{
    headerMobile.classList.toggle("active");
});