const phone = "5586981315584";

const messages = {
  geral: "Olá, Dr. Davi Portella. Preciso de orientação jurídica.",
  criminal: "Olá, Dr. Davi Portella. Preciso de atendimento criminal urgente.",
  prisao: "Olá, Dr. Davi Portella. Preciso de atendimento urgente sobre prisão em flagrante.",
  mandado: "Olá, Dr. Davi Portella. Preciso de orientação sobre cumprimento de mandado.",
  depoimento: "Olá, Dr. Davi Portella. Recebi intimação para depoimento e preciso de orientação.",
  investigacao: "Olá, Dr. Davi Portella. Preciso de orientação sobre investigação em andamento.",
  habeas: "Olá, Dr. Davi Portella. Gostaria de orientação sobre habeas corpus.",
  trafico: "Olá, Dr. Davi Portella. Preciso de orientação sobre um caso envolvendo acusação de tráfico de drogas.",
  custodia: "Olá, Dr. Davi Portella. Preciso de orientação para audiência de custódia.",
  inquerito: "Olá, Dr. Davi Portella. Gostaria de acompanhamento em inquérito policial.",
  execucao: "Olá, Dr. Davi Portella. Preciso de orientação sobre execução penal.",
  defesa: "Olá, Dr. Davi Portella. Preciso definir uma estratégia de defesa criminal.",
  processo: "Olá, Dr. Davi Portella. Quero entender as etapas e medidas cabíveis no meu processo criminal.",
  aposentadoria: "Olá, Dr. Davi Portella. Gostaria de análise sobre aposentadoria ou benefício do INSS.",
  especial: "Olá, Dr. Davi Portella. Gostaria de análise sobre aposentadoria por tempo especial.",
  incapacidade: "Olá, Dr. Davi Portella. Gostaria de orientação sobre benefício por incapacidade.",
  pensao: "Olá, Dr. Davi Portella. Gostaria de orientação sobre pensão por morte.",
  bpc: "Olá, Dr. Davi Portella. Gostaria de orientação sobre BPC/LOAS.",
  inss: "Olá, Dr. Davi Portella. Gostaria de orientação sobre ação ou benefício contra o INSS.",
  atuacaoDireta: "Olá, Dr. Davi Portella. Gostaria de atendimento direto do advogado para analisar meu caso.",
  estrategiaDefesa: "Olá, Dr. Davi Portella. Preciso definir a melhor estratégia para a minha defesa.",
  plantaoUrgente: "Olá, Dr. Davi Portella. Preciso de atendimento urgente no plantão criminal.",
  comunicacaoClara: "Olá, Dr. Davi Portella. Gostaria de entender meu caso com orientação clara e objetiva.",
  sobre: "Olá, Dr. Davi Portella. Gostaria de falar com o advogado sobre meu caso.",
  online: "Olá, Dr. Davi Portella. Gostaria de iniciar atendimento online.",
  faq: "Olá, Dr. Davi Portella. Tenho uma dúvida jurídica e gostaria de uma análise individual."
};

const whatsappUrl = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuButton = document.querySelector("[data-menu-button]");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const tickerMarkup = (label) => {
  const items = Array.from({ length: 8 }, () => `<span><b>&#9878;</b>${label}</span>`).join("");
  return `<div class="ticker-track">${items}</div>`;
};

document.querySelectorAll(".template-frame.frame-01, .template-frame.frame-02, .template-frame.frame-08").forEach((frame) => {
  const label = frame.classList.contains("frame-08")
    ? "Atendimento em todo o Brasil"
    : "Atendimento em todo o Piauí";
  const ticker = document.createElement("div");
  ticker.className = "animated-ticker";
  ticker.setAttribute("aria-hidden", "true");
  ticker.innerHTML = tickerMarkup(label);
  frame.appendChild(ticker);
});

document.querySelectorAll("[data-whatsapp]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    const key = trigger.dataset.whatsapp;
    window.open(whatsappUrl(messages[key] || messages.geral), "_blank", "noopener");
  });
});

document.querySelectorAll(".faq-list summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    const item = summary.parentElement;
    if (item.open) return;

    const list = item.closest(".faq-list");
    list.querySelectorAll("details[open]").forEach((other) => {
      if (other !== item) other.removeAttribute("open");
    });
  });
});
