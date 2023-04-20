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
  window.scrollTo({
    top: scrollingSpace,
    behavior: "smooth",
  });
}

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

const movingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.add("visible");
    if (entry.isIntersecting) {
      movingObserver.unobserve(entry.target);
    }
  });
},{thresholds :.65});

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
