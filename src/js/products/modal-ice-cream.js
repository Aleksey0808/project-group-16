(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-cream]"),
    closeModalBtn: document.querySelector("[data-modal-close-cream]"),
    modal: document.querySelector("[data-modal-cream]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

