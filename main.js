const root = document.querySelector(":root");
const caption = document.querySelector(".before-after");
const number = document.querySelector(".counter");
const counterTargets = document.querySelectorAll(".observed");
const background = document.querySelector("background");
const obseveTargets = [];
obseveTargets.push(number);
counterTargets.forEach((price) => {
  // console.log(price);
  obseveTargets.push(price);
});

// console.log(counterTargets);
function increment(count, target, targervalue) {
  setInterval(() => {
    if (count < targervalue) {
      // count++;
      targervalue > 1000 ? (count = count + 20) : count++;
      target.innerText = count;
      if (target.innerText > targervalue) {
        target.innerText = targervalue;
      }
    }
  }, 10);
}
$(".background").click(function () {
  $(".nav_ul").removeClass("visible");
  $(".background").removeClass("visible");
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let count = 0;
    let target = entry.target;
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
    let targetNumber = parseInt(entry.target.getAttribute("data-value"));
    // console.log(parseInt(targetNumber));
    entry.target.textContent = 0;
    increment(count, target, targetNumber);
  });
  // console.log(entries);
});
obseveTargets.forEach((target) => {
  observer.observe(target);
});
let rootStyles = getComputedStyle(root);
document.querySelector("#slider").addEventListener("input", (e) => {
  root.style.setProperty("--position", `${e.target.value}%`);
});
document.querySelector("#slider").addEventListener("mouseenter", (e) => {
  caption.classList.add("hidden");
});
document.querySelector("#slider").addEventListener("mouseleave", (e) => {
  caption.classList.remove("hidden");
});
$(".menu").click(function () {
  $(".nav_ul").addClass("visible");
  $(".background").addClass("visible");
});
$(".close-icon").click(function () {
  $(".background").removeClass("visible");
  $(".nav_ul").removeClass("visible");
});

$(".nav_ul li a").click(function (e) {
  $(".nav_ul li a").removeClass("active");
  e.target.classList.add("active");
});
