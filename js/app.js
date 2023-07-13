/************ Start Prloader ************/
// const preloader = document.querySelector(".preloader");
// window.addEventListener("load", function () {
//   preloader.classList.add("hide-preloader");
// });

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
/************ End Prloader ************/

document.querySelector(".main-nav").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.currentTarget);
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/************ Start goDownBtn ************/
const goDownBtn = document.querySelector(".go-down");
const articlesSection = document.querySelector(".articles");

goDownBtn.addEventListener("click", function (e) {
  e.preventDefault();
  articlesSection.scrollIntoView({ behavior: "smooth" });
});
/************ End goDownBtn ************/

/************ Start reveal Section ************/

const allSections = document.querySelectorAll("section");

// console.log(allSections);

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

/************ End reveal Section ************/

/************ Start scroll-progress ************/

/**/

const progressSpans = document.querySelectorAll(".the-progress span");
const sectionSkills = document.querySelector(".our-skills");

// window.onscroll = function () {
//   if (window.scrollY >= sectionSkills.offsetTop - 300) {
//     progressSpans.forEach((progressSpan) => {
//       progressSpan.style.width = progressSpan.dataset.width;
//     });
//   }
// };
window.addEventListener("scroll", function () {
  if (window.scrollY >= sectionSkills.offsetTop) {
    progressSpans.forEach((progressSpan) => {
      progressSpan.style.width = progressSpan.dataset.width;
    });
  }
});
/************ End scroll-progress ************/

/************ Start Counting ************/

// Set the date we're counting down to
const countDate = new Date("Dec 31, 2022 23:59:59").getTime();

const counter = setInterval(function () {
  // get date now
  const dateNow = new Date().getTime();

  // Find the distance between now and the count down date
  const t = countDate - dateNow;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((t % (1000 * 60)) / 1000);

  // Display the result in the elements of counting
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  // If the count down is finished, write some text
  if (t < 0) {
    clearInterval();
  }
}, 1000);

/************ End Counting ************/

/************ Start increasing numbers on scroll ************/
const nums = document.querySelectorAll(".stats .number");
const statsSection = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop - 400) {
    if (!started) {
      nums.forEach(function (num) {
        const startCount = function (el) {
          const goal = el.dataset.goal;
          let count = setInterval(function () {
            el.textContent++;
            if (el.textContent == goal) {
              clearInterval(count);
            }
          }, 2000 / goal);
        };
        startCount(num);
      });
    }
    started = true;
  }
});

/************ End increasing numbers on scroll ************/
