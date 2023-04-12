function addValue(){
    // get the operands value
    var operand1 = document.getElementById("input_a").value;
    var operand2 = document.getElementById("input_b").value;
    // parse to integer. You can use: parseInt(input, 10);
    var operand1 = parseInt(document.getElementById("input_a").value, 10);
    var operand2 = parseInt(document.getElementById("input_b").value, 10);
    // perform operation
    var result = operand1 + operand2;
    // creating the text output
    var text = operand1 + " + " + operand2 + " = " + result;
    // (if you want to check) print out in console
    console.log(text);
    // change the text area
    document.mycalculator.output.value = text;
}

function mulValue(){
    var operand1 = parseInt(document.getElementById("input_a").value, 10);
    var operand2 = parseInt(document.getElementById("input_b").value, 10);
    var result = operand1 * operand2;
    var text = operand1 + " * " + operand2 + " = " + result;
    console.log(text);
    document.mycalculator.output.value = text;
}

function divValue(){
    var operand1 = parseInt(document.getElementById("input_a").value, 10);
    var operand2 = parseInt(document.getElementById("input_b").value, 10);
    var result = operand1 / operand2;
    var text = operand1 + " / " + operand2 + " = " + result;
    console.log(text);
    document.mycalculator.output.value = text;
}

