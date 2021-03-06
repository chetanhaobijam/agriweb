const leftSlide = document.querySelector(".leftSlide");
const rightSlide = document.querySelector(".rightSlide");
const galleryImg = document.querySelector(".gallery img");

const banners = [
  "assets/images/banner1.gif",
  "assets/images/banner2.jpg",
  "assets/images/banner3.gif",
  "assets/images/banner0.jpg"
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

leftSlide.addEventListener("click", changeImgLeft);
rightSlide.addEventListener("click", changeImgRight);

