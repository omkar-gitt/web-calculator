const display=document.getElementById("display");
function addToDisplay(input)
{
   display.value += input;

}
function calculate()
{
    try{
        display.value=eval(display.value);

    }
    catch(error)
    {
        display.value="error";
    }
}
function clearDisplay()
{
    display.value="";
}