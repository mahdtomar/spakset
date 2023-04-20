const root = document.querySelector(":root");
const caption = document.querySelector(".before-after");
const number = document.querySelector(".counter");
const counterTargets = document.querySelectorAll(".observed");
const background = document.querySelector("background");
// const home = document.getElementById("home");
// const prices = document.getElementById("prices");
// const contacts = document.getElementById("contacts");
const links = document.querySelectorAll(".navigator");
const foodRocket = document.querySelector(".car-hero");
const woodenPlate = document.getElementById("plate");
const UpBotton = document.querySelector(".up-button");

UpBotton.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    navigation(link);
  });
});

const obseveTargets = [];
obseveTargets.push(number);

counterTargets.forEach((price) => {
  obseveTargets.push(price);
});

function navigation(e) {
  id = e.getAttribute("data-target");
  console.log(id);
  targetElement = document.getElementById(id);
  console.log(targetElement);
  let scrollingSpace = targetElement.offsetTop;
  console.log(scrollingSpace);
  switch (id) {
    case "works":
      scrollingSpace = document.querySelector(".big-container").offsetTop;
      console.log(scrollingSpace);
      window.scrollTo({
        top: scrollingSpace + 50,
        left: 0,
        behavior: "smooth",
      });
      break;
    case "about-us":
      //   scrollingSpace = document.querySelector(".big-container").offsetTop;
      console.log(scrollingSpace);
      window.scrollTo({
        top: scrollingSpace - 100,
        left: 0,
        behavior: "smooth",
      });
      break;
    case "prices":
      let parent = targetElement.parentElement;
      let parentDistance = parent.offsetTop;
      console.log(parent, parent.offsetTop);
      scrollingSpace =
        scrollingSpace + parentDistance + parent.parentElement.offsetTop - 150;
      console.log(scrollingSpace);
      window.scrollTo({
        top: scrollingSpace - 200,
        left: 0,
        behavior: "smooth",
      });
      break;

    default:
      window.scrollTo({
        top: scrollingSpace,
        behavior: "smooth",
      });
      break;
  }
}
// function navigation(id) {
//   console.log(id);
//   const element = document.getElementById(id);
//   // console.log(document.getElementById(id).offsetTop);
//   window.scrollTo({
//     top: id.offsetTop - 100,
//     left: 0,
//     behavior: "smooth",
//   });
//   // window.moveTo(0, document.getElementById(id).clientHeight);
//   console.log(window.scrollY);
// }

function increment(count, target, targervalue) {
  setInterval(() => {
    if (count < targervalue) {
      // count++;
      switch (targervalue) {
        case 1500:
          count = count + 10;
          break;
        case 4000:
          count = count + 22;
          break;

        default:
          count = count + 3;
          break;
      }
      // targervalue > 300 ? (count = count + 3) : count++;
      // targervalue > 1500 ? (count = count + 20) : count++;
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
    entry.target.textContent = 0;
    increment(count, target, targetNumber);
  });
});
obseveTargets.forEach((target) => {
  observer.observe(target);
});

const movingObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target == woodenPlate ? console.log("plate") : "";
        entry.target == foodRocket ? console.log("food") : "";
        movingObserver.unobserve(entry.target);
      }
    });
  },
  { thresholds: 0.8 }
);

movingObserver.observe(foodRocket);
movingObserver.observe(woodenPlate);
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
