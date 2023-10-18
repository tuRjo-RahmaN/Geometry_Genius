// Function-1 [Checking Validation]
function validationCheck(shape,num1,num2)
{
    const figure = document.getElementById(shape).innerText;

    const inp1 = document.getElementById(num1);
    const new_inp1 = parseFloat(inp1.value);

    const inp2 = document.getElementById(num2);
    const new_inp2 = parseFloat(inp2.value);

    inp1.value = "";
    inp2.value = ""; 
    
    
    if(isNaN(new_inp1)==false && isNaN(new_inp2)==false && new_inp1>=0 && new_inp2>=0)
    {
        if(figure == "Triangle" || figure == "Rhombus" || figure == "Pentagon")
        {
            const answer = (0.5 * new_inp1 * new_inp2).toFixed(2);
            calculation(figure,answer);
        }

        else if(figure == "Rectangle" || figure == "Parallelogram")
        {
            const answer = (new_inp1 * new_inp2).toFixed(2);
            calculation(figure,answer);
        }

        else if(figure == "Ellipse")
        {
            const answer = (3.1416 * new_inp1 * new_inp2).toFixed(2);
            calculation(figure,answer);

        }
    }

    else
    alert('Please enter a NUMBER type value in each input field!! You must write POSITIVE value in both input field!! Both input field must be FILLED-UP');
}