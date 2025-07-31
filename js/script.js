const nameInput = document.getElementById("expense-name-input");
const costInput = document.getElementById("expense-cost-input");
const typeInput = document.getElementById("expense-type-input");
const submitBtn = document.getElementById("submit-btn");
const ulEl = document.getElementById("ul-el");

const expenseList = [];

function addExpense() {
  const expenseName = nameInput.value;
  const expenseCost = parseFloat(costInput.value);
  const expenseType = typeInput.value;
  const expense = {
    name: expenseName,
    cost: expenseCost,
    type: expenseType,
  };
  expenseList.push(expense);
}

function saveExpense() {
  ulEl.innerHTML = "";
  for (let i = 0; i < expenseList.length; i++) {
    const expense = expenseList[i];
    ulEl.innerHTML += `<li class="expense-item"> <div class="expense-info"><h4>${expense.name}</h4> <p>${expense.type}</p></div> <div class="expense-price">$${expense.cost}</div> </li>`;
  }
}

function resetInputs() {
  nameInput.value = "";
  costInput.value = "";
  typeInput.value = "";
}

function removeExpenseItem() {}

submitBtn.addEventListener("click", function () {
  event.preventDefault();
  addExpense();
  saveExpense();
  resetInputs();
});
