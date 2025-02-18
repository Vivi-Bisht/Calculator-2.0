const buttons = document.querySelectorAll("button");
const screen = document.querySelector("input");
let val = "";

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        buttonText = button.innerText;

        if(buttonText == "C"){
            val = "";
        }
        else if(buttonText == "="){
            try{
                val = eval(val);
            }
            catch{
                val = "ERROR";
            }
        }
        else{
            val += buttonText;
        }

        screen.value = val;
    });
});