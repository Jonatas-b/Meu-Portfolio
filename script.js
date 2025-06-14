// Animação simples no scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

function loopLogoAnimation() {
  const logo = document.querySelector('.logo');
  logo.classList.add('animating');
  const total = 1.4 + 1.2; // último delay + duração
  setTimeout(() => {
    logo.classList.remove('animating');
    // Força reflow para reiniciar a animação
    void logo.offsetWidth;
    setTimeout(loopLogoAnimation, 5000); // pausa de 5 segundos
  }, total * 1000);
}
loopLogoAnimation();