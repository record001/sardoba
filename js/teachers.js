let header = document.querySelector("header");
let nav = document.querySelector(".nav");
let logo_img = document.querySelector(".logo__img");
let logo_text = document.querySelector(".logo__text");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.padding = "10px 0";
    header.style.height = "80px";

    logo_text.style.lineHeight = "20px";
  } else {
    nav.style.padding = "20px 0";
    header.style.height = "105px";
    logo_text.style.lineHeight = "22px";
  }
});


// modal
// let nav = document.querySelector(".nav");
let modal = document.querySelector(".modal");
let modal_link = document.querySelectorAll(".modal__link");
// console.log(modal_link);
let burger = document.querySelector(".burger");
let bar = document.querySelectorAll(".bar");

// burger

function myFunction(x) {
  x.classList.toggle("change");
  modal.classList.toggle("active");
  
  if (modal.classList.contains("active")) {
    bar.forEach((item) => {
      item.style.backgroundColor = "white";
    });
  } else {
    bar.forEach((item) => {
      item.style.backgroundColor = "black";
    });
  }
}

modal_link.forEach((link) => {
  link.addEventListener("click", () => {
    myFunction(burger);
    modal.classList.remove("active");
  });
});