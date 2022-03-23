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


// modal_photo

let img_render = document.querySelector(".modal_photo__img")
let modal_photo = document.querySelector(".modal_photo")
let modal_photo__close = document.querySelector(".modal_photo__close")






let first_arr = []
let second_arr = []
let third_arr = []
let forth_arr = []
let arr_photo = course.forEach(item => {
  item.img.forEach(elem => {
    if(first_arr.length <6) {
      first_arr.push(elem)
    } else if(second_arr.length < 6) {
      second_arr.push(elem)
    } else if(third_arr.length < 6) {
      third_arr.push(elem)
    }else if(forth_arr.length < 6) {
      forth_arr.push(elem)
    }
  })
})


let photos__first = document.querySelector(".photos__first")
let photos__second = document.querySelector(".photos__second")
let photos__third = document.querySelector(".photos__third")
let photos__forth = document.querySelector(".photos__forth")

first_arr.forEach(img => {
  photos__first.innerHTML += `<div class="photos__blur">
  <img src=${img} alt="photo">
</div>` 
})
second_arr.forEach(img => {
  photos__second.innerHTML += `<div class="photos__blur">
  <img src=${img} alt="photo">
</div>` 
})
third_arr.forEach(img => {
  photos__third.innerHTML += `<div class="photos__blur">
  <img src=${img} alt="photo">
</div>` 
})
forth_arr.forEach(img => {
  photos__forth.innerHTML += `<div class="photos__blur">
  <img src=${img} alt="photo">
</div>` 
})

let images = document.querySelectorAll(".photos__blur")


images.forEach(img => {

  img.firstElementChild.addEventListener('click', e =>{
     modal_photo.classList.add("modal_photo_db")

     img_render.innerHTML = `<div class="modal_photo__img">
     <img src="${e.target.src}" alt="photo">
   </div>`
  })
 
 })
 
 modal_photo__close.addEventListener('click', e => {
   modal_photo.classList.remove("modal_photo_db")
 })
 