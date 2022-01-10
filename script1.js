"use strict";

// const account1 = {
//     name: "Jonas Schmedtmann",
//     dept: "dept01",
//     sale1: 1000,
//     sale2: 1111,
//     average:0,
//   };

const accounts = [];

// Elements   movements__row__input
const labelWelcome = document.querySelector(".welcome");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements__row__input"); //containerMovements
const containerMovements_ = document.querySelector(".movements");
const btnDetails = document.querySelector(".form__btn--details");
const btnSortA = document.querySelector(".form__btn--sortA");
const btnSortD = document.querySelector(".form__btn--sortD");

const inputName = document.querySelector(".form__input--name");
const inputDept = document.querySelector(".form__input--dept");
const inputSale1 = document.querySelector(".form__input--year1");
const inputSale2 = document.querySelector(".form__input--year2");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const displayUI = function (acc) {
  containerMovements.innerHTML = "";
  for (let i = 0; i < acc.length; i++) {
    const ob = acc[i];
    const html = `
    <div class="movements__row">
    <div class="movements__type name">${ob.name}</div>
    <div class="movements__type dept">${ob.dept}</div>
    <div class="movements__type sale1">${ob.sale1}₹</div>
    <div class="movements__type sale2">${ob.sale2}₹</div>
    <div class="movements__type sale2">${ob.average}₹</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  }
};
btnDetails.addEventListener("click", function (event) {
  event.preventDefault();
  const name = inputName.value;
  const dept = inputDept.value;
  const sale1 = Number(inputSale1.value);
  const sale2 = Number(inputSale2.value);
  const avg = Math.floor((sale1 + sale2) / 2);
  const ob = {
    name: name,
    dept: dept,
    sale1: sale1,
    sale2: sale2,
    average: avg,
  };

  inputName.value = inputDept.value = inputSale1.value = inputSale2.value = ``;
  accounts.push(ob);
  displayUI(accounts);
});

btnSortA.addEventListener("click", function (event) {
  containerMovements.innerHTML = "";
  const new_array = accounts.slice().sort((x, y) => x.average - y.average);
  displayUI(new_array);
});

btnSortD.addEventListener("click", function (event) {
  containerMovements.innerHTML = "";
  const new_array = accounts.slice().sort((x, y) => -x.average + y.average);
  displayUI(new_array);
});
