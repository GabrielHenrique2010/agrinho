document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");
    const header = document.querySelector("header");

    // 1. Efeito de scroll no cabeçalho (muda sombra ao rolar a página)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
            header.style.padding = "15px 5%";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
            header.style.padding = "20px 5%";
        }
    });

    // 2. Manipulação do envio do formulário
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Captura os dados inseridos
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        // Validação simples simulando envio
        if (nome && email) {
            feedback.textContent = `Obrigado, ${nome}! Sua mensagem sobre a agricultura familiar foi enviada com sucesso. Entraremos em contato em breve.`;
            feedback.className = "success"; // Aplica classe de sucesso do CSS
            
            // Reseta o formulário
            form.reset();
            
            // Remove a mensagem após 5 segundos
            setTimeout(() => {
                feedback.className = "hidden";
            }, 5000);
        }
    });
});