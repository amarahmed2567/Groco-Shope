let menu =document.querySelector(".navbar .items .fa-bars");
let menuBox =document.querySelector(".links ul");
let search =document.querySelector(".navbar .items .fa-magnifying-glass");
let searchBox =document.querySelector(".search-bar");
let login =document.querySelector(".navbar .items .fa-user");
let loginBox =document.querySelector(".login");
let shopping =document.querySelector(".navbar .items .fa-cart-shopping");
let shoppingBox =document.querySelector(".shopping-cart");

menu.onclick = function(){
    menuBox.classList.toggle("activ");
    searchBox.classList.remove("activ");
    loginBox.classList.remove("activ");
    shoppingBox.classList.remove("activ");
};
search.onclick = function(){
    searchBox.classList.toggle("activ");
    loginBox.classList.remove("activ");
    menuBox.classList.remove("activ");
    shoppingBox.classList.remove("activ");
};
login.onclick = function(){
    loginBox.classList.toggle("activ");
    searchBox.classList.remove("activ");
    menuBox.classList.remove("activ");
    shoppingBox.classList.remove("activ");
    
}
shopping.onclick = function(){
    shoppingBox.classList.toggle("activ");
    searchBox.classList.remove("activ");
    menuBox.classList.remove("activ");
    loginBoxh54r3.classList.remove("activ");
}
//swiper
var swiper = new Swiper(".mySwiper-product", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
    0:{
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1020: {
        slidesPerView: 3,
    },
    },
});

var swiper = new Swiper(".mySwiper-Review", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
    0:{
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1020: {
        slidesPerView: 3,
    },
    },
});