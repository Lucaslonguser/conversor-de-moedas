const button = document.querySelector("button");
const valorDaMoedaDe = document.querySelector(".selectConverterDe")
const valorDaMoedaPara = document.querySelector(".selectOptionConvert");

button.addEventListener("click", function () {

  const moedaPais = document.querySelector(".money");

  const iconLibra = document.querySelector(".libraIcon");
  const iconEUA = document.querySelector(".euaIcon");
  const iconEuro = document.querySelector(".euroIcon");

  const valor = document.querySelector(".inputValue").value;

  const dollarToday = 5.2;
  const euro = 6.1;
  const libraHoje = 7.2;

  const real = document.querySelector(".real");
  const valorConvertido = document.querySelector(".valorConvertido");

  if (valorDaMoedaPara.value == "dolar") {
    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valor / dollarToday);
  }

  if (valorDaMoedaPara.value == "euro") {
    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valor / euro);
  }

if (valorDaMoedaPara.value === "libra") {
  valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(valor / libraHoje);
}


  real.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

  if (valorDaMoedaPara.value === "dolar") {
    moedaPais.innerHTML = "Dólar Americano";
    iconEUA.style.display = "grid";
    iconEuro.style.display = "none";
    iconLibra.style.display = "none";
  } else if (valorDaMoedaPara.value === "euro") {
    moedaPais.innerHTML = "Euro";
    iconEuro.style.display = "grid";
    iconEUA.style.display = "none";
    iconLibra.style.display = "none";
  } else if (valorDaMoedaPara.value === "libra") {
    moedaPais.innerHTML = "£ libra";
    iconLibra.style.display = "grid";
    iconEUA.style.display = "none";
    iconEuro.style.display = "none";
  } else {
    iconEUA.style.display = "none";
    iconEuro.style.display = "none";
    iconLibra.style.display = "none";
  }



});
