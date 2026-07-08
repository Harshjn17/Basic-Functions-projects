let expenses = [
  { id: 1, name: "Food", amount: 500 },
  { id: 2, name: "Travel", amount: 300 },
  { id: 3, name: "Movie", amount: 250 }
];

function addExpense(expenses, id, name, amount){
  expenses.push({
    id,
    name,
    amount
  });
  
  return expenses;
}

function removeExpense(expenses, id){
  for(let i = 0; i < expenses.length; i++){
    if(expenses[i].id === id){
      expenses.splice(i,1);
      break;
    }
  }
  return expenses;
}

function totalExpense(expenses) {
  let total = 0;
  for(let i = 0; i < expenses.length; i++){
    total += expenses[i].amount;
  }
  return total;
}

function highestExpense(expenses) {
  let highest = expenses[0];
  
  for(let i = 0; i < expenses.length; i++){
    if(expenses[i].amount > highest.amount){
      highest = expenses[i];
    }
  }
  return highest;
  
}

function searchExpense(expenses, keyword) {
  for(let i= 0; i < expenses.length; i++){
    if(keyword.toLowerCase() === expenses[i].name.toLowerCase()){
      return expenses[i];
    }
  }
  return "Nothing can Found";
}

console.log(addExpense(expenses, 4, "Shopping", 1200));
removeExpense(expenses, 2);
console.log(totalExpense(expenses));
console.log(highestExpense(expenses));

console.log(searchExpense(expenses, "Food"));
