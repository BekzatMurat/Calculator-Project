let num1 = 0;
let num2 = 0;
sign = "+";
let result = 0;

function calculate() {
  if (result > 100000000) {
    result = result.toExponential(2);
    result = result.toString();
    result = result.replace("e+", "x10^");
  }
  document.querySelector('.result').innerHTML = result;
}

function enter(param) {
  let input = document.querySelector('.input');
  
  if(param === "AC") {
    input.innerHTML = 0;
    document.querySelector('.result').innerHTML = 0;
  } else {
      if (input.innerHTML === "0") {
        input.innerHTML = "";
      }
      else if (param === "^") {
        sign = "^";
      }
      else if (param === "%") {
        sign = "%";
      }
      else if (param === "/") {
        sign = "/";
      }
      else if (param === "x") {
        sign = "x";
      }
      else if (param === "-") {
        sign = "-";
      }
      else if (param === "+") {
        sign = "+";
      }
    input.innerHTML += param;
    console.log(input);
  }

  const arr = input.innerHTML.split(/[\^\+\-\*\/\x\%/]/);
  
  num1 = Number(arr[0]);
  num2 = Number(arr[1]);

  if (sign === "^") {
    result = Math.pow(num1, num2);
  }
  else if (sign === "%") {
    if (num2 !== 0) {
      result = num1 % num2;
    }
  }
  else if (sign === "/") {
    if (num2 !== 0) {
      result = num1 / num2;
    }
  }
  else if (sign === "x") {
    result = num1 * num2;
  }
  else if (sign === "-") {
    result = num1 - num2;
  }
  else if (sign === "+") {
    result = num1 + num2;
  }
  
}