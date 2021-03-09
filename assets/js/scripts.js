const leftSlide = document.querySelector(".leftSlide");
const rightSlide = document.querySelector(".rightSlide");
const galleryImg = document.querySelector(".gallery img");

const banners = [
  "/images/banner1.gif",
  "/images/banner2.jpg",
  "/images/banner3.gif",
  "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
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

