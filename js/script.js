const nameInput = document.getElementById("expense-name-input");
const costInput = document.getElementById("expense-cost-input");
const typeInput = document.getElementById("expense-type-input");
const submitBtn = document.getElementById("submit-btn");
const ulEl = document.getElementById("ul-el");
const emptyExpense = document.getElementById("empty-expense");

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
    ulEl.innerHTML +=
      "<li>" +
      expenseList[i].name +
      " " +
      expenseList[i].cost +
      "$" +
      " " +
      expenseList[i].type +
      "</li>";
  }
  if (expenseList.length === 0) {
    emptyExpense.textContent =
      "No expenses added yet. Add your first expense above! 👆";
  }
}

submitBtn.addEventListener("click", function () {
  addExpense();
  saveExpense();
  nameInput.value = "";
  costInput.value = "";
  typeInput.value = "";
});
