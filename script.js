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

function typeWriter(element, text, speed = 30) {
  element.innerHTML = ""; // Limpa o conteúdo antes de digitar
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

document.addEventListener("DOMContentLoaded", function() {
  const sobreTexto = document.getElementById("sobre-texto");
  if (sobreTexto) {
    const texto = `Tenho 17 anos e atualmente estou no terceiro ano do ensino médio integrado ao curso técnico em Desenvolvimento de Sistemas, onde venho desenvolvendo minha base na área da programação e na construção de soluções digitais.
Ao longo da minha formação, participei de projetos práticos. Essas experiências me proporcionaram contato direto com conceitos importantes de lógica, estruturação de código e interface com o usuário, despertando ainda mais meu interesse pelo desenvolvimento de software.
Embora ainda esteja em processo de aprofundamento, busco constantemente aprender novas linguagens e tecnologias. Tenho interesse tanto no front-end quanto no back-end, e acredito na importância de desenvolver uma base versátil para aproveitar oportunidades em diversas áreas da programação.
Me destaco por minha facilidade e disponibilidade para aprender, espírito de liderança, boa comunicação e resiliência frente aos desafios. Sou comprometido, levo a sério tudo aquilo que me proponho a fazer e gosto de atuar em equipe, colaborando para que ideias se transformem em resultados concretos.
Meu objetivo é crescer como desenvolvedor, ampliando meus conhecimentos e competências para atuar em projetos reais, contribuindo para soluções inovadoras em um mercado em constante evolução.`;
    typeWriter(sobreTexto, texto, 18); // ajuste a velocidade se quiser
  }
});