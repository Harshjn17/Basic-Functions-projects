let account = {
  name: "Rahul",
  balance: 1000,
  history: []
};

// Deposit
function deposit(account, amount){
  account.balance += amount;
  account.history.push(`Deposited ₹${amount}`);
  return account;
}

// Withdraw
function withdraw(account, amount){
  if(account.balance >= amount){
    account.balance -= amount;
    account.history.push(`Withdrawn ₹${amount}`);
    return account;
  } else {
    return "Insufficient Balance";
  }
}

// Check Balnance 
function checkBalance(account){
  return account.balance;
}

// Transaction history 
function transactionHistory(account){
  return account.history;
} 


console.log(deposit(account, 500));
console.log(withdraw(account, 1000));
console.log(transactionHistory(account));
console.log(checkBalance(account));
