import { pizza_premium, pizza_tradicional, pizza_doce } from "./pizzas.js";

pizza_premium.map((pizza) => createCard(pizza));
pizza_tradicional.map((pizza) => createCard(pizza));
pizza_doce.map((pizza) => createCard(pizza));

function createCard(pizza) {
  const card = document.querySelector(`#${pizza.category}`);
  const pizza_div = `
  <div class = "pizza flex justify-center items-center flex-col">     
    <img id="${pizza.id}" class="img-pizzas" src="${pizza.image}" alt="${pizza.name}">
      <div class="descricao-sabor">
        <h3>${pizza.name}</h3>
        <p class="descricao-pizza">
          ${pizza.description}
        </p><br>
        <p><i>Massa Premium</i></p>
        <p>Pizza grande - 30cm</p>
        <button class="add-carrinho" id="button-carrinho" onclick="addPizzaToCart('${pizza.id}')">
          Adicionar ao carrinho
          <i class="fa fa-solid fa-cart-shopping"></i>
        </button>
      </div>
  </div>
  `;
  card.insertAdjacentHTML("beforeend", pizza_div);
}

window.forcarResponsividade = forcarResponsividade;

function forcarResponsividade() {
  const screenWidth = screen.width;
  const divPremium = document.getElementById("premium");
  const divTrad = document.getElementById("tradicional");
  const divDoce = document.getElementById("doce");

  if (screenWidth > 1300) {
    divPremium.className = "grid grid-cols-3 gap-56";
    divTrad.className = "grid grid-cols-3 gap-56";
    divDoce.className = "grid grid-cols-3 gap-56";
  } else if (screenWidth < 1300 && screenWidth > 690) {
    divPremium.className = "grid grid-cols-2 gap-56";
    divTrad.className = "grid grid-cols-2 gap-56";
    divDoce.className = "grid grid-cols-2 gap-56";
  } else if (screenWidth < 690) {
    divPremium.className = "grid grid-cols-1 ";
    divTrad.className = "grid grid-cols-1 gap-56";
    divDoce.className = "grid grid-cols-1 gap-56";
  }
}

setInterval(forcarResponsividade, 250);
