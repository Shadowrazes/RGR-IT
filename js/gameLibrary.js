window.onload = function () {
  document.querySelector(".switcher__heroes").addEventListener("click", () => {
    document.querySelector(".switcher__heroes").style.backgroundColor = "#F08531";
    document.querySelector(".switcher__items").style.backgroundColor = "black";

    document.querySelector(".switcher__heroes-list").classList.remove("invisible");
    document.querySelector(".switcher__items-list").classList.add("invisible");
  })

  document.querySelector(".switcher__items").addEventListener("click", () => {
    document.querySelector(".switcher__heroes").style.backgroundColor = "black";
    document.querySelector(".switcher__items").style.backgroundColor = "#F08531";

    document.querySelector(".switcher__heroes-list").classList.add("invisible");
    document.querySelector(".switcher__items-list").classList.remove("invisible");
  })
}