// Seleciona todas as imagens do portfólio e clientes
const imagens = document.querySelectorAll(
    ".img-Secao-Inicial img, #secao-Img-Portfolio img"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Remove e adiciona a classe para reiniciar a animação se aparecer de novo
                entry.target.classList.remove("img-animada");
                const _ = entry.target.offsetWidth; // força reflow e evita o aviso
                entry.target.classList.add("img-animada");
            }
        });
    },
    { threshold: 0.3 }
);

imagens.forEach((img) => observer.observe(img));
