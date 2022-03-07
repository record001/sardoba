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

  console.log(window.innerHeight);
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

document.querySelector(".facts").addEventListener("mouseenter", () => {

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
