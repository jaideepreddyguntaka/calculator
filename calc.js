const display=document.body.querySelector(".display");
const buttons=document.body.querySelectorAll("button");
const specialchars=["%","*","/","-","+","="];
let output="";

// define the function calculator based on the button clicked.
const calculate = ((btnvalue)=>{
    if(btnvalue ==="=" && btnvalue!=="")
    {
        // if output has '%', replace with the '/100' before evaluating.
        output=eval(output.replace("%","/100"));
    }
    else if(btnvalue ==="AC")
    {
        output="";
    }
    else if(btnvalue ==="DEL")
    {
        // if "DEL" button is clicked,the it will remove the last charector of the output.
        output=output.toString().slice(0,-1);
    }
    else
    {
        // if the output is empty and you clicked specialchars button then return.
        if(output==="" && specialchars.includes(btnvalue))
        {
            return;
        }
        output+=btnvalue;
    }
    display.value=output;
})
// Add event listener to buttons, call calculate() on click.
buttons.forEach((button)=>{
// button click listener it the calls calculate() with dataset value as argument.
    button.addEventListener("click",(e)=>{calculate(e.target.dataset.value)});
    }
)

