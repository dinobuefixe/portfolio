document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("botao");
  const span = document.querySelector(".close");
  const form = document.getElementById("contactForm");
  const modalContent = document.querySelector(".modal-content");

  // impedir envio do formulário
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    modal.style.display = "block";
  });

  // fechar no X
  span.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // fechar ao clicar fora do conteúdo
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // impedir que cliques dentro do conteúdo fechem o modal
  modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("alternarCor");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("lightmode");
  });
});



