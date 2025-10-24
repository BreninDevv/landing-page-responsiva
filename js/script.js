const menu = document.getElementById("sidebar-menu");
const openBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.getElementById("overlay");
const loginBtn = document.getElementById("login");
const featuresBtn = document.getElementById("features");
const companyBtn = document.getElementById("company");
const featuresMenu = document.querySelector(".itemsFeatures");
const companyMenu = document.querySelector(".itemsCompany");

document.addEventListener("DOMContentLoaded", (event) => {
  // Seleciona o botão de login pelo ID 'login'
  const loginButton = document.getElementById("login");

  if (loginButton) {
    // Adiciona um listener para o evento de clique
    loginButton.addEventListener("click", function () {
      // Esta única linha é o que resolve o seu problema:
      // Ela remove o foco ('focus') do botão, fazendo com que ele perca o estilo
      // de 'clicado/focado' e volte ao seu estado normal.
      this.blur();
    });
  }
});

featuresBtn.addEventListener("click", () => {
  featuresMenu.classList.toggle("on");
});
companyBtn.addEventListener("click", () => {
  companyMenu.classList.toggle("on");
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
