function Buttonclicked() {
  console.log("Addieren button clicked");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  let result = parseFloat(num1) + parseFloat(num2);
  document.getElementById("erg").innerText = result;

  console.log(result);
}

function sub() {
  console.log("Subtrahieren button clicked");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  let subtra = parseFloat(num1) - parseFloat(num2);
  document.getElementById("erg").innerText = subtra;

  console.log(subtra);
}

function mal() {
  console.log("Multiplizieren button clicked");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  let multi = parseFloat(num1) * parseFloat(num2);
  document.getElementById("erg").innerText = multi;

  console.log(multi);
}

function divi() {
  console.log("Dividieren button clicked");
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;

  let divisionerg = parseFloat(num1) / parseFloat(num2);
  document.getElementById("erg").innerText = divisionerg;

  console.log(divisionerg);
}
