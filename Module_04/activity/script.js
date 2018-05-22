function process() {
    var textIn1 = document.displayText.textInput1.value;
    var textIn2 = document.displayText.textInput2.value;
    var textIn3 = document.displayText.textInput3.value;
    var textOut = "";

    if (textIn1>textIn2 && textIn1>textIn3)
{
        if (textIn2 > textIn3)
        {
            textOut = textIn1 + ", " + textIn2 + ", " + textIn3;
        }
        else
        {
            textOut = textIn1 + ", " + textIn3 + ", " + textIn2;
        }
}
else if (textIn2 > textIn1 && textIn2 > textIn3)
{
        if (textIn1 > textIn3)
        {
             textOut = textIn2 + ", " + textIn1 + ", " + textIn3;
        }
        else
        {
             textOut = textIn2 + ", " + textIn3 + ", " + textIn1;
        }
}
else if (textIn3 > textIn1 && textIn3 > textIn2)
{
        if (textIn1 > textIn2)
        {
            textOut = textIn3 + ", " + textIn1 + ", " + textIn2;
        }
        else
        {
            textOut = textIn3 + ", " + textIn2 + ", " + textIn1;
        }
}
    $(".returnedLabel").append("The input values sorted: ");
    $(".returnedResult").append(textOut);
}
