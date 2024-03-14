// Ограничение на ввод с клавиатуры не более 8 символов
input.oninput = function () {
  this.value = this.value.substr(0, 8);
};

window.addEventListener("click", function (e) {
  let target = e.target;

  // Обработка кнопок для ввода в input
  input.value = (input.value + target.innerText).substr(0, 8);
  if (input.value[0] == "0") {
    input.value = input.value.substr(1);
  }

  //Обработка функционала калькулятора
  switch (target.id) {
    case "delenie": //Обработка нажатия кнопки действия деление
      valOne = parseFloat(input.value);
      input.value = "";
      znaki = "/";
      break;
  }

  switch (target.innerText) {
    case "C": //Обработка нажатия кнопки очистить табло
      input.value = "";
      input.value = "0";
      output.innerText = "";
      break;
    case "+": //Обработка нажатия кнопки действия сложения
      valOne = parseFloat(input.value);
      input.value = "";
      znaki = "+";
      break;
    case "-": //Обработка нажатия кнопки действия вычитания
      valOne = parseFloat(input.value);
      input.value = "";
      znaki = "-";
      break;
    case "x": //Обработка нажатия кнопки действия вычитания
      valOne = parseFloat(input.value);
      input.value = "";
      znaki = "x";
      break;
    case "%": //Обработка нажатия кнопки действия процент
      valOne = parseFloat(input.value);
      input.value = "";
      znaki = "%";
      break;
    case "+/-": //Обработка нажатия кнопки действия вычитания
      input.value = -parseFloat(input.value);
      toggleClass(input, "znakMinus");
      isZnakMinus = findClassName(input, "znakMinus");
      if (isZnakMinus == true) {
        input.value = parseFloat(input.value);
      }
      break;
    case "=": //Обработка нажатия кнопки действия равно,
      // Обработка математических операций
      valTwo = parseFloat(input.value);

      switch (znaki) {
        case "+":
          input.value = parseFloat(valOne) + parseFloat(valTwo);
          break;
        case "-":
          input.value = parseFloat(valOne) - parseFloat(valTwo);
          break;
        case "/":
          input.value = (parseFloat(valOne) / parseFloat(valTwo)).toFixed(2);
          break;
        case "x":
          input.value = parseFloat(valOne) * parseFloat(valTwo);
          break;
        case "%":
          input.value = (parseFloat(valOne) * parseFloat(valTwo)) / 100;
          output.innerText =
            "" + valTwo + " процентов от " + valOne + " равно - " + input.value;
          break;
        default:
          alert("Нет таких действий");
      }
      break;
  }
});
