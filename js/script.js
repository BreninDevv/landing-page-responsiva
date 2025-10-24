const menu = document.getElementById("sidebar-menu");
const openBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.getElementById("overlay");
const loginBtn = document.getElementById("login");
const featuresBtn = document.getElementById("features");
const companyBtn = document.getElementById("company");
const featuresMenu = document.querySelector(".itemsFeatures");
const companyMenu = document.querySelector(".itemsCompany");
const imagemDown = "images/icon-arrow-down.svg";
const imagemUp = "images/icon-arrow-up.svg";
const featureImagem = document.getElementById("featureImg");
const companyImagem = document.getElementById("companyImg");

featuresBtn.addEventListener("click", () => {
  featuresMenu.classList.toggle("on");
  if (featureImagem.src.includes(imagemDown)) {
    featureImagem.src = imagemUp;
  } else {
    featureImagem.src = imagemDown;
  }
});
companyBtn.addEventListener("click", () => {
  companyMenu.classList.toggle("on");
  if (companyImagem.src.includes(imagemDown)) {
    companyImagem.src = imagemUp;
  } else {
    companyImagem.src = imagemDown;
  }
});

loginBtn.addEventListener("click", () => {
  loginBtn.classList.toggle("active");
});

function toggleBtn() {
  menu.classList.toggle("open");
  overlay.classList.toggle("open");
}

openBtn.addEventListener("click", toggleBtn);
closeBtn.addEventListener("click", toggleBtn);
