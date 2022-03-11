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

/*

window.addEventListener("scroll", ()=> {


  // console.log(window.innerHeight);
  if (window.scrollY > 1800) {

   

    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  
    const obj = document.getElementById("value");
    animateValue(obj, 0, 100, 3000);
    const obj1 = document.getElementById("value1");
    animateValue(obj1, 0, 50, 3000);
    const obj2 = document.getElementById("value2");
    animateValue(obj2, 0, 20, 3000);
    const obj3 = document.getElementById("value3");
    animateValue(obj3, 0, 70, 3000);

  }
})

*/
let facts = document.querySelector(".facts");
facts.addEventListener("mouseenter", () => {
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const obj = document.getElementById("value");
  animateValue(obj, 0, 100, 3000);
  const obj1 = document.getElementById("value1");
  animateValue(obj1, 0, 50, 3000);
  const obj2 = document.getElementById("value2");
  animateValue(obj2, 0, 20, 3000);
  const obj3 = document.getElementById("value3");
  animateValue(obj3, 0, 70, 3000);
});

// courses modal

let course__close_btn = document.querySelector(".course__close_btn");
let courses__modal = document.querySelector(".courses__modal");
let courses__card = document.querySelectorAll(".courses__card");
let courses__modal__right = document.querySelector(".courses__modal__right")
let courses__carousel  =document.querySelector(".courses__carousel")

course__close_btn.addEventListener("click", () => {
  courses__modal.classList.remove("d_block");
  courses__modal.classList.add("d_none");
});

courses__card.forEach((card) => {
  card.addEventListener("click", (event) => {

    courses__modal.classList.remove("d_none");
    courses__modal.classList.add("d_block");

    let id = event.target.dataset.id
    // console.log(event.target.dataset.id);

    let card = course.filter(item => id == item.id)

    console.log(card[0].title);

    courses__modal__right.innerHTML = `
    <h2>${card[0].title}</h2>
    <p>${card[0].description}.</p>
    <p>${card[0].cost}</p>    `
   
    courses__carousel.innerHTML = `
    <div class="carousel-item active">
    <img class="d-block w-100" src=${card[0].img[0]}  alt="First slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src=${card[0].img[1]}  alt="Second slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src=${card[0].img[2]} alt="Third slide">
  </div>
    `
  });
});


