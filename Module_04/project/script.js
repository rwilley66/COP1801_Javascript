function process() {
    var textIn = document.displayText.textInput.value;
    var colorIn = document.displayText.textColor.value;
    var textOut = document.createElement("div");
    textOut.textContent = textIn + "\n";
    $(".returnedLabel").append("The text you typed in the color you chose is: ");
    switch (colorIn) {
        case "red":
            $(".returnedResult").css("color", "#a50000");
            break;
        case "green":
            $(".returnedResult").css("color", "#1b9856");
            break;
        case "blue":
            $(".returnedResult").css("color", "#004a87");
            break;
    }
    $(".returnedResult").append(textOut);
}
