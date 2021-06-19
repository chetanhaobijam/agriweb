// Show or hide languages
const language = document.querySelector(".language");
const english = document.querySelector(".english");
const meitei = document.querySelector(".meitei");
const manEng = document.querySelector(".manEng");
const thadou = document.querySelector(".thadou");
const paite = document.querySelector(".paite");
const hmar = document.querySelector(".hmar");

const toggleLanguages = () => {
  language.addEventListener("click", () => {
    english.classList.toggle("show");
    meitei.classList.toggle("show");
    manEng.classList.toggle("show");
    thadou.classList.toggle("show");
    paite.classList.toggle("show");
    hmar.classList.toggle("show");
  })
}

toggleLanguages();

// Show or hide navbar on small screens
const navbar = document.querySelector("#navbar");
const menu = document.querySelector("#menu");
const menuIcon = document.querySelector("#menuIcon");

const toggleMenuByIcon = () => {
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("show");
  })

}

const toggleMenuByBtn = () => {
  menu.addEventListener("click", () => {
    navbar.classList.toggle("hide");
  })

}

toggleMenuByIcon();
toggleMenuByBtn();