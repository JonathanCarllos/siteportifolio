const btnAnimar = document.getElementById("btn-menu")
const menuDiv = document.getElementById("menu-mobile")

function animar() {
    btnAnimar.classList.toggle('ativar')
    menuDiv.classList.toggle('abrir')
}

menuDiv.addEventListener('click', animar)

function scrollToSection(target) {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop
      });
    }
  }

  const anchors = document.querySelectorAll('nav a[href^="#"]' || 'div.btn-contato a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener("click", event => {
      event.preventDefault(); // Evita o comportamento padrão do link
      const target = event.target.getAttribute("href");
      scrollToSection(target);
    });
  });