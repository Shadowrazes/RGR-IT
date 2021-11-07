window.onload = function () {
  document.querySelector(".contact__form-send-btn").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".success__popup").classList.remove("hidden");
    document.body.style.overflowY = "hidden";
  })

  document.querySelector(".success__popup-btn").addEventListener("click", () => {
    document.querySelector(".success__popup").classList.add("hidden");
    document.body.style.overflowY = "scroll";
  })
}