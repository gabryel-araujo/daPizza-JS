import Swal from "sweetalert2";

const divUsers = document.getElementById("usersList");
const removeUser = document.getElementById("remove");
const localStorageKeys = Object.keys(localStorage);
const localStorageArray = localStorageKeys.map((key) => {
  return JSON.parse(localStorage.getItem(key));
});

removeUser.addEventListener("click", () => {
  Swal.fire({
    title: "Insira o Email que deseja remover: ",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Remover",
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem(result.value);
      location.reload();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log(localStorageArray);

  localStorageArray.map((user) => {
    divUsers.innerHTML += `<div class="bg-white shadow-md rounded-lg p-4 mb-5 mx-2 my-2">
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
});
