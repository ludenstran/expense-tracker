const nameInput = document.getElementById("expense-name-input");
const costInput = document.getElementById("expense-cost-input");
const typeInput = document.getElementById("expense-type-input");
const submitBtn = document.getElementById("submit-btn");
const totalExpense = document.getElementById("total-expense-el");
const ulEl = document.getElementById("ul-el");

const expenseList = [];

function addExpense() {
  const expenseName = nameInput.value.trim();
  const expenseCost = parseFloat(costInput.value);
  const expenseType = typeInput.value;
  const expense = {
    name: expenseName,
    cost: expenseCost,
    type: expenseType,
  };
  if (expenseName === "" || isNaN(expenseCost) || expenseType === "") {
  } else {
    expenseList.push(expense);
  }
}

function saveExpense() {
  let ulElList = "";
  for (let i = 0; i < expenseList.length; i++) {
    const expense = expenseList[i];
    ulElList += `<li class="expense-item">
                      <div class="expense-info"><h4>${expense.name}</h4> <p>${expense.type}</p></div>
                      <div class="expense-price">$${expense.cost}</div>
                      </li>`;
  }
  ulEl.innerHTML = ulElList;
}

function caculateExpense() {
  let totalCost = 0;
  for (let i = 0; i < expenseList.length; i++) {
    totalCost += expenseList[i].cost;
  }
  totalExpense.textContent = "$" + totalCost;
}

function resetInputs() {
  nameInput.value = "";
  costInput.value = "";
  typeInput.value = "";
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addExpense();
  saveExpense();
  resetInputs();
  caculateExpense();
});
