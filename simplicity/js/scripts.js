/* JS INICIAL PARA CEP/ENDEREÇO */
const formulario = document.querySelector("form");
const inputCep = formulario.querySelector("#cep");
const inputTelefone = formulario.querySelector("#telefone");
const inputEndereco = formulario.querySelector("#endereco");
const inputBairro = formulario.querySelector("#bairro");
const inputCidade = formulario.querySelector("#cidade");
const inputEstado = formulario.querySelector("#estado");
const bStatus = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");

botaoLocalizar.addEventListener("click", function(event){
    event.preventDefault();

    /* acessar o site viacep.com.br */

    /* pegar o cep digitado */
    let cep = inputCep.value;

    /* cep no padrão da API */
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    /* ajax: comunicação assíncrona com o viaCEP usando a função chamada fetch */
    // 1) fazer conexão com a API (ou acessar)
    fetch(url)
        // 2) E então, recupere a resposta do acesso no formato JSON
        .then(resposta => resposta.json())
            // 3) E então. mostre os dados
            .then(dados => {
                if ("erro" in dados) {
                    bStatus.innerHTML = "CEP não encontrado!";
                    inputCep.focus();
                } else {
                    bStatus.innerHTML = "CEP encontrado!";
                    inputEndereco.value = dados.logradouro;
                    inputBairro.value = dados.bairro;
                    inputCidade.value = dados.localidade;
                    inputEstado.value = dados.uf;
                }
            });
});
/* lib vanillaMasker:
https://github.com/vanilla-masker/vanilla-masker */

VMasker(inputCep).maskPattern("99999-999");
VMasker(inputTelefone).maskPattern("(99) 9999-9999");

/* JS INICIAL PARA MENSAGEM, programação do contador de caracteres do campo mensagem*/
const spanMaximo = formulario.querySelector("#maximo");
const bCaracteres = formulario.querySelector("#caracteres");
const textMensagem = formulario.querySelector("#mensagem");

/* determinar a quantidade máxima de caracteres do campo mensagem */
let quantidade = 500;

/* evento para detectar a digitação (entrada) no campo mensagem */
textMensagem.addEventListener("input", function(){
    /* capturando o que foi digitado */
    let conteudo = textMensagem.value;

    /* criando a contagem regressiva */
    let contagem = quantidade - conteudo.length;

    /* adicionando a contagem ao elemento HTML */
    bCaracteres.innerHTML = contagem;

    /* desafio: 
    se for 0, vermelho 
    e não, preto*/

    if (contagem == 0) {
        bCaracteres.style.color = "red";
        textMensagem.style.boxShadow = "red 0 2px 10px"
    } else {
        bCaracteres.style.color = "black";
        textMensagem.style.boxShadow = "black 0 2px 10px"
    }
});

/* programação formspree */
var form = document.getElementById("my-form");
    
    async function handleSubmit(event){
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Obrigado por enviar!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! Houve um problema com o seu envio! Tente novamente mais tarde."
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! Houve um problema com o seu envio! Tente novamente mais tarde."
      });
    }
    form.addEventListener("submit", handleSubmit)