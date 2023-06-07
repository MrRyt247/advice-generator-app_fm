getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      document.querySelector("h6").innerText = `ADVICE #${adviceData.slip.id}`;
      document.querySelector("p").innerText = `"${adviceData.slip.advice}"`;
    })
    .catch((error) => {
      return error;
    });
};

const screenWidth = document.body.clientWidth;

window.onload = () => {
  getAdvice();
  if (screenWidth <= 450) {
    document.querySelector("img").setAttribute("src", "./images/pattern-divider-mobile.svg");
  }
};

document.querySelector("button").addEventListener("click", getAdvice);
document.querySelector("button").addEventListener(
  "click",
  (rotate = () => {
    document.querySelector("button").classList.toggle("rotate");
  })
);