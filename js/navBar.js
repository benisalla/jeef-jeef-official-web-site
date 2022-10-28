const toggleBtn = document.querySelector(".toggle-btn");
const navContent = document.querySelector(".nav-content");

ToggleNavBar();

addEventListener("resize", ToggleNavBar);

function ToggleNavBar() {
  if (window.innerWidth < 750) {
    console.log("//test//");
    toggleBtn.classList.add("collapsed");
    navContent.classList.add("collapsed");
  } else {
    toggleBtn.classList.remove("collapsed");
    navContent.classList.remove("collapsed");
    toggleBtn.classList.remove("active");
    navContent.classList.remove("active");
  }
}

addEventListener("click", (event) => {
  if (
    event.target == toggleBtn ||
    event.target === document.querySelector(".toggle-btn div")
  ) {
    toggleBtn.classList.toggle("active");
    navContent.classList.toggle("active");
  }
});

//---------------------------< fix navBar >---------------------------//
const navBarContainer = document.querySelector(".navBar-container");
const emptyPusher = document.querySelector(".empty-pusher");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    navBarContainer.classList.add("fixed");
    emptyPusher.style.display = "block";
  } else {
    navBarContainer.classList.remove("fixed");
    emptyPusher.style.display = "none";
  }
});
//==========================================================================//
document.body.style = "background-color: var(--bs-dark);transition: 0.5s;";
const sun = "./img/sun.png";
const moon = "./img/moon.png";

var darkMode = false;
const root = document.querySelector(":root");
const body = document.querySelector("body");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);
function setTheme() {
  switch (darkMode) {
    case true:
      setDark();
      darkMode = !darkMode;
      break;
    case false:
      setLight();
      darkMode = !darkMode;
      break;
  }
}

setTheme();

function setDark() {
  root.style.setProperty(
    "--bs-dark",
    "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
  );

  root.style.setProperty("--bs-dark", "#212529");
  root.style.setProperty("--clr-darker", "#fff");
  root.style.setProperty("--clr-dark", "#eee");
  root.style.setProperty("--clr-light", "#222");
  root.style.setProperty("--clr-white", "#000");
  body.style.setProperty(
    "background",
    "transparent linear-gradient(143deg, #E0E1F2 0%, #ECE9EB 22%, #EDEAEA 76%, #FFE2E2 100%) 0% 0% no-repeat padding-box"
  );

  container.classList.remove("shadow-light");
  setTimeout(() => {
    container.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
}
function setLight() {
  root.style.setProperty("--bs-dark", "#212529");
  root.style.setProperty("--clr-darker", "#1b212c");
  root.style.setProperty("--clr-dark", "#1f2153");
  root.style.setProperty("--clr-light", "#9fa1bc");
  root.style.setProperty("--clr-white", "#ffffff");
  body.style.setProperty(
    "background",
    `transparent linear-gradient(160deg,
      #1b212c 0%,
      #1f2153 100%) 0% 0% no-repeat padding-box`
  );

  container.classList.remove("shadow-dark");
  setTimeout(() => {
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = sun;
}
