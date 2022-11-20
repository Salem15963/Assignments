
function myFunction() {
    alert("Loading weather report...");
}

function hideMe(hide){
var element=hide.parentElement;
element.remove()
}

    function cToF(celsius) 
    {
        var cTemp = celsius;
         var cToFahr = cTemp * 9 / 5 + 32;

    }
    
    function fToC(fahrenheit) 
    {
        var fTemp = fahrenheit;
         var fToCel = (fTemp - 32) * 5 / 9;
         return fToCel
    } 

    function changeUnit(){

        // get the value of the selector
       // let unit = document.getElementById('measureunit').
        if(unit == "C°"){
            // for every element in the card
            let degrees = document.getElementsByClassName('degree')
            for(let i=0; i<degrees.length; i++){
                degrees[i].innerText = fToC(degrees[i].innerText)
            }
            
        }else{
            // for every element in the card
            cToF()
        }
    }

    


