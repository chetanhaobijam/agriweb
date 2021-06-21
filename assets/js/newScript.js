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

// Image Controls Functions
const leftBtn = document.querySelector("#leftBtn i");
const rightBtn = document.querySelector("#rightBtn i");
const galleryImg = document.querySelector("#image img");

const banners = [
  "./assets/images/banner1.gif",
  "./assets/images/banner2.jpg",
  "./assets/images/banner3.gif",
  "./assets/images/banner0.jpg"
]

const changeImgLeft = () => {
  if(galleryImg.getAttribute("src") === banners[3]) {
    galleryImg.setAttribute("src", banners[2]);
  } else if(galleryImg.getAttribute("src") === banners[2]) {
    galleryImg.setAttribute("src", banners[1]);
  } else if(galleryImg.getAttribute("src") === banners[1]) {
    galleryImg.setAttribute("src", banners[0]);
  } else if(galleryImg.getAttribute("src") === banners[0]) {
    galleryImg.setAttribute("src", banners[3]);
  } 
}

const changeImgRight = () => {
  if(galleryImg.getAttribute("src") === banners[3]) {
    galleryImg.setAttribute("src", banners[0]);
  } else if(galleryImg.getAttribute("src") === banners[0]) {
    galleryImg.setAttribute("src", banners[1]);
  } else if(galleryImg.getAttribute("src") === banners[1]) {
    galleryImg.setAttribute("src", banners[2]);
  } else if(galleryImg.getAttribute("src") === banners[2]) {
    galleryImg.setAttribute("src", banners[3]);
  } 
}

leftBtn.addEventListener("click", changeImgLeft);
rightBtn.addEventListener("click", changeImgRight);

setInterval(changeImgRight, 5000);
