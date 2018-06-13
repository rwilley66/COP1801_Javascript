function calculateResult() {
    var numbers = /^[0-9]+$/;
    var theForm = document.forms["calcArea"];
    var formRadius = theForm.elements["radius"];

    var formHeight = theForm.elements["height"];
    var calcRadius = 0;
    if (formRadius.value.match(numbers)) {
        calcRadius = parseInt(formRadius.value);
    }
    else {
        alert("Radius is required and can be digits only.");
        return false;
    }
    var calcHeight = 0;
    if (formHeight.value.match(numbers)) {
        calcHeight = parseInt(formHeight.value);
    }
    else {
        alert("Height is required and can be digits only.");
        return false;
    }

    var resultOut = (2 * Math.PI * calcRadius * calcHeight) + (2 * Math.PI * Math.pow(calcRadius, 2));

    //document.getElementById("resultDisplay").innerHTML = "The area of the cylinder is: " + resultOut.toFixed(2);

    alert("The area of the cylinder is: " + resultOut.toFixed(2));
}
