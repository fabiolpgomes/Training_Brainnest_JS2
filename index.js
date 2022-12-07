function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
} //console.log("9*9+8");

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  if (num == "-") {
    return ""; // for return negative numbers
  }
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}
//printOutput("24689892");

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
//alert(reverseNumberFormat(getOutput()));

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    //console.log("The operator clicked: " + this.id);
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      //console.log("The operator clicked: " + this.id);
      let output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        //if output has a value, print it
        output = output.substring(0, output.length - 1); //expect output value of string -1
        printOutput(output);
      }
    } else {
      let output = getOutput();
      let history = getHistory();
      if (output !== "") {
        output = reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          let result = eval(history);
          printOutput(result);
          printHistory("");
        }
      }
    }
  });
}

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    //console.log("The numbers clicked: " + this.id);
    let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      //if output is a number
      output = output + this.id;
      printOutput(output);
    } else {
      history = history + this.id;
      printHistory(history);
      printOutput("");
    }
  });
}
