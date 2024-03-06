// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}
function calculate() {
    try{                      // it is dangerous code
        display.value = eval(display.value); //a fnc that evaluate the value within my display

    }
    catch{ 
display.value = "Error";
    }
}
