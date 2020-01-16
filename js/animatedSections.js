const sections = {
  0: document.querySelector(`#home`),
  1: document.querySelector(`#about`),
  2: document.querySelector(`#skills`),
  3: document.querySelector(`#works`),
  4: document.querySelector(`#contact`),
};

setTimeout(
  window.addEventListener(`scroll`, function() {
    for (section in sections) {
        if (window.pageYOffset + (window.innerHeight * 3) / 3.5 > sections[section].offsetTop) sections[section].setAttribute(`style`, `opacity:1;transition-duration:1s`);
        else sections[section].setAttribute(`style`, `opacity:0;transition-duration:1s`);
    }
  }),
  500
);