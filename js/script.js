const menu = document.getElementById("sidebar-menu");
const openBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".close-btn");

function toggleBtn() {
  menu.classList.toggle("open");
  console.log("a");
}

openBtn.addEventListener("click", toggleBtn);
closeBtn.addEventListener("click", toggleBtn);
