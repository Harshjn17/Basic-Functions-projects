function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  if(b === 0){
    return "Cannot divide by zero";
  } else {
    return a / b;
  }
}

function calculate(operation, a, b) {
  if(operation === "+") return add(a,b);
  if(operation === "-") return subtract(a,b);
  if(operation === "*") return multiply(a,b);
  if(operation === "/") return divide(a,b);
  
  return "Inavlid operation";
}

console.log(calculate("+",5,5)); // 10
console.log(calculate("-",5,5)); // 0
console.log(calculate("*",5,5)); // 25
console.log(calculate("/",5,5)); // 1
