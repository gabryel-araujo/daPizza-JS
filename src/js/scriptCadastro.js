import Swal from "sweetalert2";

const username = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const address = document.getElementById("address");
const neighborhood = document.getElementById("neighborhood");
const city = document.getElementById("city");
const additional = document.getElementById("additional");
const houseNumber = document.getElementById("number");
let storage = false;
const userList = JSON.parse(localStorage.getItem("userList")) || [];
const testando123 = document.getElementById("testando123");

// Função que completa o endereço com base no cep
async function getZipcode() {
  const zipCode = document.getElementById("zipCode").value;
  const url = `https://viacep.com.br/ws/${zipCode}/json`;

  const response = await fetch(url);
  const data = await response.json();

  address.value = data.logradouro;
  neighborhood.value = data.bairro;
  city.value = data.localidade;
}

document.addEventListener("focusout", getZipcode);

//Validação do tamanho do nome
username.addEventListener("keyup", () => {
  username.value.length < 3
    ? //Tratamento se verdadeira
      (username.className =
        "h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl outline-red-500 text-pink-600")
    : //Tratamento se falsa
      (username.className =
        "h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl");
});

//Validação do email
email.addEventListener("keyup", () => {
  email.value.includes("@") && email.value.includes(".com")
    ? //True
      (email.className =
        "h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl")
    : //False
      (email.className =
        "h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl outline-red-500 text-pink-600");
});

//Validação da senha
{
  password.addEventListener("keyup", () => {
    password.value.length < 6 || password.value.length == 0
      ? //True
        (password.className =
          "h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl outline-red-500 text-pink-600")
      : //False
        (password.className =
          "h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl");
  });

  passwordConfirm.addEventListener("keyup", () => {
    passwordConfirm.value.length < 6 || passwordConfirm.value.length === 0
      ? //True
        (passwordConfirm.className =
          "h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl outline-red-500 text-pink-600")
      : //False
        (passwordConfirm.className =
          "h-14 border mt-1 rounded px-4 w-full bg-zinc-300 text-xl");
  });
}

//Função que verifica se os parâmetros do form são válidos
function validateUser() {
  return username.value === "" ||
    email.value === "" ||
    password.value === "" ||
    passwordConfirm === "" ||
    password.value != passwordConfirm.value ||
    zipCode.value === "" ||
    password.value.length < 6
    ? Swal.fire("Error", "A senha deve conter no mínimo 6 caracteres", "error")
    : ""
    ? false
    : true;
}
// Verificar se o usuário já está na lista de cadastrados
function isOnStorage() {
  const Temp = localStorage.getItem(email.value);
  Temp != null
    ? (Swal.fire("Error", "Esse email já está cadastrado!", "error"),
      (storage = true))
    : (storage = false);
}

//Função que registra o usuário na base de dados
function registerUser() {
  isOnStorage();
  validateUser() === true && storage === false
    ? (localStorage.setItem(
        `${email.value}`,
        JSON.stringify({
          name: username.value,
          email: email.value,
          password: password.value,
          address: address.value,
          additional: additional.value,
          number: houseNumber.value,
          neighborhood: neighborhood.value,
          city: city.value,
          zipcode: zipCode.value,
        })
      ),
      Swal.fire("Tudo certo!", "Cadastro realizado com sucesso", "success"))
    : username.value === ""
    ? username.focus()
    : email.value === ""
    ? email.focus()
    : password.value === ""
    ? password.focus()
    : passwordConfirm.value === ""
    ? passwordConfirm.focus()
    : zipCode.value === ""
    ? zipCode.focus()
    : "";
}

const register = document.getElementById("btnRegister");
register.addEventListener("click", registerUser);

function showUser() {
  const divUsers = document.getElementById("usersList");

  const localStorageKeys = Object.keys(localStorage);
  const localStorageArray = localStorageKeys.map((key) => {
    return JSON.parse(localStorage.getItem(key));
  });

  localStorageArray.map((user) => {
    divUsers.innerHTML = `<div class="bg-white shadow-md rounded-lg p-4 mb-5 cursor-pointer">
      <div class="flex justify-between items-center">
      <h3 class="text-lg font-semibold text-gray-700">${user.name}</h3>
      <p class="text-md font-semibold text-gray-700">
        ${user.neighborhood}
      </p>
    </div>
      <div class="mt-4">
    <p class="text-sm text-gray-500">
      <span class="font-bold">Endereço: </span> ${user.address}
    </p>
    <p class="text-sm text-gray-500">
      <span class="font-bold">Complemento:</span> ${user.additional}
    </p>
    <p class="text-sm text-gray-500">
      <span class="font-bold">Email:</span> ${user.email}
    </p>
    <p class="text-sm text-gray-500">
      <span class="font-bold">Cep:</span> ${user.zipcode}
    </p>
      </div>
    </div>`;
  });
}

testando123.addEventListener("click", showUser);
