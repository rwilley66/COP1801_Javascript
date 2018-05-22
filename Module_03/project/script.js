function process() {
    var textIn = document.displayText.textInput.value;
    var textOut = document.createElement("div");
    textOut.textContent = textIn + "\n";
    /* $("#mainPage").append(textOut); */
    $(".returnedLabel").append("The text you typed was: ");
    $(".returnedResult").append(textOut);
}
