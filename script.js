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

// Função para animar o logo em loop
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

// Função para efeito de máquina de escrever no texto
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

// Executa quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function() {
  const sobreTexto = document.getElementById("sobre-texto");
  if (sobreTexto) {
    // Texto a ser exibido com efeito de máquina de escrever
    const texto = `Desenvolvedor em formação com base técnica em Desenvolvimento de Sistemas, atuando principalmente com HTML, CSS e JavaScript. Experiência prática na construção de interfaces responsivas, componentes reutilizáveis e aplicações front-end com foco em lógica, estrutura e clareza de código.

Possuo perfil analítico e autodidata, com interesse em compreender fundamentos, padrões e boas práticas, evitando soluções superficiais. Desenvolvo projetos próprios para consolidar conhecimentos em manipulação do DOM, estados de aplicação, validações, fluxos de usuário e organização de código.

Atualmente direciono meus estudos para front-end, sem perder a visão de arquitetura e evolução para full stack, buscando oportunidades para aplicar conhecimento técnico em projetos reais e ambientes que valorizem qualidade e aprendizado contínuo.`;
    typeWriter(sobreTexto, texto, 18);
  }

});
