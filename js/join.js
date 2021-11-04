window.onload = function (event) {
  document.querySelector(".join__form-button").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".success__popup").classList.remove("hidden");
    document.body.style.overflowY = "hidden";
  })

  document.querySelector(".success__popup-btn").addEventListener("click", () => {
    document.querySelector(".success__popup").classList.add("hidden");
    document.body.style.overflowY = "scroll";
  })
}