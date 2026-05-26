const phone = "5586981315584";

const messages = {
  geral: "Olá, Dr. Davi. Vi seu site e gostaria de orientação jurídica.",
  criminal: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre um caso criminal.",
  prisao: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre prisão em flagrante.",
  mandado: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre cumprimento de mandado.",
  depoimento: "Olá, Dr. Davi. Recebi intimação para depoimento e gostaria de orientação jurídica.",
  investigacao: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre investigação em andamento.",
  habeas: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre habeas corpus.",
  trafico: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre um caso envolvendo acusação de tráfico de drogas.",
  custodia: "Olá, Dr. Davi. Vi seu site e gostaria de orientação para audiência de custódia.",
  inquerito: "Olá, Dr. Davi. Vi seu site e gostaria de acompanhamento em inquérito policial.",
  execucao: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre execução penal.",
  defesa: "Olá, Dr. Davi. Vi seu site e gostaria de agendar análise do caso.",
  processo: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre uma fase do processo criminal.",
  aposentadoria: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre aposentadoria ou benefício do INSS.",
  especial: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre aposentadoria por tempo especial.",
  incapacidade: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre auxílio-doença ou aposentadoria por invalidez.",
  pensao: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre pensão por morte.",
  bpc: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre BPC/LOAS.",
  inss: "Olá, Dr. Davi. Vi seu site e gostaria de orientação sobre benefício do INSS.",
  atuacaoDireta: "Olá, Dr. Davi. Vi seu site e gostaria de atendimento direto do advogado para análise do meu caso.",
  estrategiaDefesa: "Olá, Dr. Davi. Vi seu site e gostaria de orientação para definir os próximos passos do meu caso.",
  plantaoUrgente: "Olá, Dr. Davi. Vi seu site e gostaria de orientação criminal em situação urgente.",
  comunicacaoClara: "Olá, Dr. Davi. Vi seu site e gostaria de orientação jurídica clara e objetiva.",
  sobre: "Olá, Dr. Davi. Vi seu site e gostaria de falar com o advogado sobre meu caso.",
  online: "Olá, Dr. Davi. Vi seu site e gostaria de orientação jurídica online.",
  faq: "Olá, Dr. Davi. Vi seu site e gostaria de orientação jurídica."
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
    ? "Atendimento presencial no Piauí e online em todo o Brasil"
    : "Sede no Piauí, atendimento online em todo o Brasil";
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
