function process() {
    var textIn = document.displayText.textInput.value;
    var textCount = document.displayText.textInput.value.length + 4;
    var colorIn = document.displayText.textColor.value;
    var textOut = document.createElement("div");

    for (var i = 0; i < textCount; i++) {
        textOut.innerHTML += "*";
    }
    textOut.innerHTML += "<br />* " + textIn + " *<br />";
    for (var i = 0; i < textCount; i++) {
        textOut.innerHTML += "*";
    }

    $(".returnedLabel").append("The text you typed in the color you chose is: ");
    switch (colorIn) {
        case "red":
            $(".returnedResult").css("color", "#a50000");
            $(".returnedResult").css("font-family", "Courier New");
            break;
        case "green":
            $(".returnedResult").css("color", "#1b9856");
            $(".returnedResult").css("font-family", "Courier New");
            break;
        case "blue":
            $(".returnedResult").css("color", "#004a87");
            $(".returnedResult").css("font-family", "Courier New");
            break;
    }
    $(".returnedResult").append(textOut);
}
