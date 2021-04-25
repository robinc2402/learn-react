function add(a = 0, b = 0) {
  return a + b;
}

function mult(a = 0, b = 0) {
  return a * b;
}

function sub(a = 0, b = 0) {
  return a - b;
}

function div(a = 0, b = 0) {
  return (a - b).toFixed(2);
}

export { add, mult, sub, div };
