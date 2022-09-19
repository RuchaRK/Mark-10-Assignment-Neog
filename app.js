var firstInput = document.querySelector("#billInput");
var secondInput = document.querySelector("#cashInput");
var checkBtn = document.querySelector("#calculateBtn");
var errorMessage = document.querySelector("#error-msg");
var showValue = document.querySelectorAll(".cash-req");

var notes = [2000, 500, 100, 20, 10, 5, 1];

firstInput.addEventListener("change",isEmpty);

function isEmpty(){
    
if(firstInput.value.length == 0)
{
    msg="Enter bill amount";
    showMessage(msg);
}
else{
    secondInput.style.display="block";
}

}


checkBtn.addEventListener("click",validate);

function validate(){
    if(!isNaN(firstInput.value))
    {
        if(firstInput.value > 0){
            console.log("here");
            if(secondInput.value <= firstInput.value)
            {
                console.log(" second if shere");
                var amtRequired = secondInput.value - firstInput.value;
                calculateCash(amtRequired);
            }
            else{
                msg="U have less money than the bill amount";
                showMessage(msg)
            }
        }else{
            msg = "Enter bill amount greater than zero";
            showMessage(msg)
        }
    }
    else{
        msg="Please enter an integer not a string";
        showMessage(msg)
    }
   
}
function calculateCash(amtRequired){
    for( var i=0;i<notes.length;i++)
    { 
        var cash = Math.trunc(amtRequired/notes[i]);
        amtRequired = amtRequired%notes[i];
        showValue[i].innerText = cash;

    }

}

function showMessage(msg)
{
    errorMessage.innerHTML = msg;
    errorMessage.style.display = "block";
}