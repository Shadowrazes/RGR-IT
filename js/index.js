window.onload = function () {
  let p = 0;

  document.querySelector(".header__button").addEventListener("click", () => {
    document.querySelector(".header__popup").classList.remove("hidden");
    document.body.style.overflowY = "hidden";
  })

  document.querySelector(".popup__form-button").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".header__popup").classList.add("hidden");
    document.querySelector(".success__popup").classList.remove("hidden");
  })

  document.querySelector(".header__popup-closer-btn").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".header__popup").classList.add("hidden");
    document.body.style.overflowY = "scroll";
  })

  document.querySelector(".success__popup-btn").addEventListener("click", () => {
    document.querySelector(".success__popup").classList.add("hidden");
    document.body.style.overflowY = "scroll";
  })

  function startCountWinners() {
    let i = 0;
    let timer;

    timer = setInterval(() => {
      if (i < 993) {
        i += 3;
        document.querySelector(".main__counter-winners").innerHTML = i;
      }
      else
        clearInterval(timer);
    }, 10)
  }

  function startCountPrizes() {
    let i = 0;
    let timer;

    timer = setInterval(() => {
      if (i < 993) {
        i += 3;
        document.querySelector(".main__counter-prizes").innerHTML = i * 1900 + " Руб.";
      }
      else
        clearInterval(timer);
    }, 10)
  }

  let scrolled = 0;

  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 700 && !scrolled) {
      scrolled = 1;
      startCountWinners();
      startCountPrizes();
    }
    else if (window.pageYOffset < 500) {
      scrolled = 0;
      document.querySelector(".main__counter-winners").innerHTML = "";
    }
  })
}