const tamanhoPizza = document.getElementById("tamanho");
const tipoMassa = document.getElementById("massa");
const tipoQueijo = document.getElementById("queijo");
const mensagem = document.getElementById("mensagem");
const imagem = document.getElementById("imagem");

const selecionarQuantidade = document.getElementById("recheio");

const div_recheio1 = document.getElementById("divSabor1");
const div_recheio2 = document.getElementById("divSabor2");
const div_recheio3 = document.getElementById("divSabor3");

const recheio1 = document.getElementById("recheio1");
const recheio2 = document.getElementById("recheio2");
const recheio3 = document.getElementById("recheio3");

const tipoBorda = document.getElementById("borda");

const preco = document.querySelector("#enviar");

function montarPizza() {
  if (selecionarQuantidade.value == 0) {
    alert("selecione uma opção");
    div_recheio1.className = "hidden";
    div_recheio2.className = "hidden";
    div_recheio3.className = "hidden";
  }

  if (selecionarQuantidade.value == 1) {
    div_recheio1.className = "";
    div_recheio2.className = "hidden";
    div_recheio3.className = "hidden";
  }

  if (selecionarQuantidade.value == 2) {
    div_recheio1.className = "";
    div_recheio2.className = "";
    div_recheio3.className = "hidden";
  }

  if (selecionarQuantidade.value == 3) {
    div_recheio1.className = "";
    div_recheio2.className = "";
    div_recheio3.className = "";
  }
}

selecionarQuantidade.addEventListener("change", montarPizza);

function prices() {
  let texto;
  let img = `<img class="w-2/5 h-2/5 rounded-lg" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTlmYWVmZTU0ZDVmYzBlYzI3ZmNjMzU1NzQyOTlhYjEzOTYyZjkxZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o6Yg24rybQMeZQuxq/giphy.gif">`;

  const tamanhoPreco = {
    Pequena: 15,
    Média: 20,
    Grande: 25,
    Família: 30,
  };
  const tipoPreco = {
    Tradicional: 5,
    Integral: 7,
    Siciliana: 8,
    Napolitana: 9,
  };
  const queijoPreco = {
    Mussarela: 5,
    Parmessão: 7,
    Provolone: 8,
    Cheddar: 9,
  };
  const recheioPreco = {
    Calabresa: 5,
    Bacon: 7,
    Ovo: 9,
    Manjericão: 12,
  };
  const tipoBordaPreco = {
    Chocolate: 15,
    Catupiry: 17,
    Cheddar: 18,
    "Sem Borda": 0,
  };
  const preco1 = tamanhoPreco[tamanhoPizza.value];
  const preco2 = tipoPreco[tipoMassa.value];
  const preco3 = queijoPreco[tipoQueijo.value];
  const preco4 = recheioPreco[recheio1.value];
  const preco41 = recheioPreco[recheio2.value];
  const preco42 = recheioPreco[recheio3.value];
  const preco5 = tipoBordaPreco[tipoBorda.value];
  if (selecionarQuantidade.value == 0) {
    alert("selecione uma opção da quantidade de recheios");
  }
  if (selecionarQuantidade.value == 1) {
    let precos = [preco1, preco2, preco3, preco4, preco5];
    const ValorTotal = precos.reduce((acc, numero) => numero + acc);
    texto = `Tamanho ${tamanhoPizza.value}, Massa ${tipoMassa.value}, com queijo ${tipoQueijo.value}. <br> Recheio: ${recheio1.value} e borda recheada de ${tipoBorda.value}.<br> Total: R$${ValorTotal},00`;
    mensagem.innerHTML = texto;
    imagem.innerHTML = img;
  }
  if (selecionarQuantidade.value == 2) {
    let precos = [preco1, preco2, preco3, preco4, preco41, preco5];
    const ValorTotal = precos.reduce((acc, numero) => numero + acc);
    texto = `Tamanho ${tamanhoPizza.value}, Massa ${tipoMassa.value}, com queijo ${tipoQueijo.value}. <br> Recheio: ${recheio1.value} e ${recheio2.value} com borda recheada de ${tipoBorda.value}.<br> Total: R$${ValorTotal}`;
    mensagem.innerHTML = texto;
    imagem.innerHTML = img;
  }
  if (selecionarQuantidade.value == 3) {
    let precos = [preco1, preco2, preco3, preco4, preco41, preco42, preco5];
    const ValorTotal = precos.reduce((acc, numero) => numero + acc);
    texto = `Tamanho ${tamanhoPizza.value}, Massa ${tipoMassa.value}, com queijo ${tipoQueijo.value}. <br> Recheio: ${recheio1.value}, ${recheio2.value} e ${recheio3.value} com borda recheada de ${tipoBorda.value}.<br> Total: R$${ValorTotal}`;
    mensagem.innerHTML = texto;
    imagem.innerHTML = img;
  }
}

window.prices = prices;
