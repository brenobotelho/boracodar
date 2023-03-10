"use strict"

let horaAgr = new Date().toLocaleTimeString();
let dataHj = new Date().toLocaleDateString();

document.querySelector("#atualizacao").innerHTML = `${dataHj}, ${horaAgr}`

/* API DE CONVERSÃO DE MOEDAS */

let resultado;

$.ajax({
  type: "GET",
  dataType: "JSON",
  url: "https://economia.awesomeapi.com.br/json/all",
  success: function (data) {
    resultado = data
  },
  error: function (data) {
    alert('Erro! o site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde. :(');
  }
});

document.querySelector(".button-convert").addEventListener("click", converter)

function converter() {
      let euro = resultado["EUR"]["bid"]
      let dolar = resultado["USD"]["bid"]
      let dolarTurismo = resultado["USDT"]["bid"]
      let dolarCanadense = resultado["CAD"]["bid"]
      let dolarAustraliano = resultado["AUD"]["bid"]
      let libra = resultado["GBP"]["bid"]
      let peso = resultado["ARS"]["bid"]
      let iene = resultado["JPY"]["bid"]
      let yuan = resultado["CNY"]["bid"]
      let franco = resultado["CHF"]["bid"]
      let shekel = resultado["ILS"]["bid"]
      let btcoin = resultado["BTC"]["bid"]
      let ethereum = resultado["ETH"]["bid"]
      let ltcoin = resultado["LTC"]["bid"]
      let dogecoin = resultado["DOGE"]["bid"]
      let xrp = resultado["XRP"]["bid"]

  function getHorarioAtualizacao(codigoMoeda) {
      let data = (resultado[codigoMoeda]["create_date"])
        //Mudando a formatação da data para DD/MM/AA 
      let dia = data.substring(8, 10)
      let mes = data.substring(5, 7)
      let ano = data.substring(0, 4)
      let hora = data.substring(11, 16)
      let dataFormatada = `${dia}/${mes}/${ano} às ${hora}`
      let atualizacao = document.querySelector("#atualizacao");
        atualizacao.innerHTML = 'Cotação atualizada em ' + dataFormatada;
  }

	let numeroDigitado = document.querySelector("#entrada").value;
	numeroDigitado = parseFloat(numeroDigitado);

	let calculo;

	let saida = document.querySelector("#saida");
	let selecionado = document.querySelector("#moedas").value;

  function calcular(valorMoeda, codigoMoeda){
    calculo = numeroDigitado * valorMoeda
    numeroDigitado = numeroDigitado.toLocaleString('en-us', { style: 'currency', currency: codigoMoeda });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.value = `${calculo}`
    getHorarioAtualizacao(codigoMoeda)
  }

  if (isNaN(numeroDigitado) == true && selecionado == "NULL") {
    alert("Digite um valor e escolha uma moeda!")
  } else {
    if (isNaN(numeroDigitado) == true) {
      alert("Digite um valor!")
    }
    if (selecionado == "NULL") {
      alert("Escolha uma moeda!")
    }
  }

  if (numeroDigitado <= 0) {
    alert("Valor inválido! Digite somente valores positivos e diferentes de zero")
  }

  if (selecionado == "EUR" && !isNaN(numeroDigitado) && !isNaN(euro)) {
	  calcular(euro, "EUR")
  }

  if (selecionado == "USD" && !isNaN(numeroDigitado) && !isNaN(dolar)) {
      calcular(dolar, "USD")
  }

  if (selecionado == "USDT" && !isNaN(numeroDigitado) && !isNaN(dolarTurismo)) {
    calcular(euro, "USDT")
  }

  if (selecionado == "CAD" && !isNaN(numeroDigitado) && !isNaN(dolarCanadense)) {
      calcular(dolarCanadense, "CAD")        
  }

  if (selecionado == "AUD" && !isNaN(numeroDigitado) && !isNaN(dolarAustraliano)) {
      calcular(dolarAustraliano, "AUD")
  }

  if (selecionado == "GBP" && !isNaN(numeroDigitado) && !isNaN(libra)) {
      calcular(libra, "GBP")
  }

  if (selecionado == "ARS" && !isNaN(numeroDigitado) && !isNaN(peso)) {
      calcular(peso, "ARS")
  }

  if (selecionado == "JPY" && !isNaN(numeroDigitado) && !isNaN(iene)) {
      calcular(iene, "JPY")
  }

  if (selecionado == "CNY" && !isNaN(numeroDigitado) && !isNaN(yuan)) {
      calcular(yuan, "CNY")
  }

  if (selecionado == "CHF" && !isNaN(numeroDigitado) && !isNaN(franco)) {
      calcular(franco, "CHF")
  }

  if (selecionado == "ILS" && !isNaN(numeroDigitado) && !isNaN(shekel)) {
      calcular(shekel, "ILS")
  }

  if (selecionado == "BTC" && !isNaN(numeroDigitado) && !isNaN(btcoin)) {
      btcoin = btcoin * 1000
      calcular(btcoin, "BTC")
  }

  if (selecionado == "ETH" && !isNaN(numeroDigitado) && !isNaN(ethereum)) {
      calcular(ethereum, "ETH")
  }

  if (selecionado == "LTC" && !isNaN(numeroDigitado) && !isNaN(ltcoin)) {
      calcular(ltcoin, "LTC")
  }

  if (selecionado == "DOGE" && !isNaN(numeroDigitado) && !isNaN(dogecoin)) {
      calcular(dogecoin, "XDG")
  }

  if (selecionado == "XRP" && !isNaN(numeroDigitado) && !isNaN(xrp)) {
      calcular(xrp, "XRP")
  }

}

/* troca do ícone do país ao selecionar */

$("#moedas").click(function(){ 
    var opcao = $('#moedas :checked').val();
        if( opcao == 'USD' ){
            document.querySelector("img").src="./images/eua.png";
        }
        if( opcao == 'EUR' ){
            document.querySelector("img").src="./images/eur.png";
        }

	if( opcao == 'GBP' ){
            document.querySelector("img").src="./images/ing.png";
        }

	if( opcao == 'CHF' ){
            document.querySelector("img").src="./images/sui.png";
        }
            
});


/* Gráfico */

var xValues = ["1D", "5D", "1M", "1A", "5A", "Máx"];
var values = [5.16, 5.19, 5.10, 5.15, 5.30, 5.10];

var ctx = document.getElementById('myChart').getContext("2d");
var gradientStroke = ctx.createLinearGradient(0, 25, 0, 300);
gradientStroke.addColorStop(1, 'white');
gradientStroke.addColorStop(0, 'rgba(124, 58, 237, 0.5)');

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
	label: false,
      fill: true,
      lineTension: 0,
      backgroundColor: gradientStroke,
      borderColor: "#7C3AED",
      data: values
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 5.1, max:5.3}}],
    }
  }
});
