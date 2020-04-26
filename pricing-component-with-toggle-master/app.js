const switchInput = document.querySelector('input[name="price"]');

switchInput.addEventListener("change", function () {
  if (this.checked) {
    // Place monthly
    const cardsMonthly = [...document.querySelectorAll(".cards-wrapper > div")];
    for (const [index, card] of cardsMonthly.entries()) {
      switch (index) {
        case 0:
          [...document.querySelectorAll(".cards-wrapper > div > p > strong")][0].innerHTML = "&dollar;19.99";
        case 1:
          [...document.querySelectorAll(".cards-wrapper > div > p > strong")][1].innerHTML = "&dollar;24.99";
        case 2:
          [...document.querySelectorAll(".cards-wrapper > div > p > strong")][2].innerHTML = "&dollar;39.99";
        default:
          break;
      }
    }
  } else {
    // Place annually
    const cardsAnnually = [
      ...document.querySelectorAll(".cards-wrapper > div"),
    ];
    for (const [index, card] of cardsAnnually.entries()) {
      switch (index) {
        case 0:
          [
            ...document.querySelectorAll(".cards-wrapper > div > p > strong"),
          ][0].innerHTML = "&dollar;199.99";
          break;
        case 1:
          [
            ...document.querySelectorAll(".cards-wrapper > div > p > strong"),
          ][1].innerHTML = "&dollar;244.99";
          break;
        case 2:
          [
            ...document.querySelectorAll(".cards-wrapper > div > p > strong"),
          ][2].innerHTML = "&dollar;399.99";
          break;
        default:
          break;
      }
    }
  }
});
