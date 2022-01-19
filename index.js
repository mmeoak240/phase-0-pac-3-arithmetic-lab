let a;
let b;

function add() {
  return (a += 1)
}

function subtract() {
  return (a -= 1);
}

function multiply() {
  return (a * 1)
}

function divide() {
  return (a / 1)
}

function add(a, b) {
  return (a += b);
}

add(1000, 52);

function subtract(a, b) {
  return(a -= b);
}

subtract(0, 185);

function multiply(a, b) {
  return(a *= b);
}

multiply(0, 185);

function divide(a, b) {
  return(a /= b);
}

divide(100, 20);

function increment (n) {
return (n += 1);
}

n(4); 

function decrement(n) {
  return (n -= 1);
  }
  
  n(4); 

  function makeInt(n) {
  return (n += 1);
  }

  n(4);

  function makeInt(n) {
    return parseInt(n);
   }
 
   n("379");

  function makeInt(n) {
    return parseInt(n, 10)
  }

  n("0");

  function preserveDecimal(n)  {
    return parseFloat(n, 10)
  }

  n("2.222");
