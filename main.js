(function () {
  "use strict";

  let calculateButton = document.querySelector(".button-calculate");
  let weight = document.querySelector("input#weight");
  let height = document.querySelector("input#height");
  let imcField = document.querySelector("#imc input");
  let messageToUser = document.getElementById("message");

  calculateButton.addEventListener("click", calculate, false);

  function calculate() {
    let imc;
    if (weight.value !== "" && height.value !== "") {
      imc = weight.value / (height.value * height.value);
      let imcFormatted = imc.toFixed(2);
      populateImcField(imcFormatted);
      let message = "";
      message = getMessage(imcFormatted);

      messageToUser.textContent = `Você está no ${message}`;
      //textContent vai colocar o conteudo dentro da div
    } else {
      messageToUser.textContent =
        "Preencha o peso e altura para calcular seu IMC!";
    }
  }

  function populateImcField(imc) {
    imcField.value = imc;
  }

  function getMessage(imc) {
    if (imc < 18.25) {
      return "abaixo do peso!";
    } else if (imc < 25) {
      return "peso normal!";
    } else if (imc < 30) {
      return "levemente acima do peso!";
    } else if (imc < 35) {
      return "obesidade grau 1";
    } else if (imc < 40) {
      return "obesidade grau 2";
    } else {
      return "obesidade grau 3";
    }
  }
})();
