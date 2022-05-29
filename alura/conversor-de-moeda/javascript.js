// Float = número decimal
// Int = número inteiro
// inner = interior

// DESAFIO
// Adicionar outras moedas para converter.
// Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
// Conversor de temperaturas entre farenheit, kelvin e celcius.
// Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.

function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  