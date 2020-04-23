numArray = [];

function ascendingFunction(){

        
    numArray = [];

    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num3 = document.getElementById("num3").value;

    numArray.push(num1);
    numArray.push(num2);
    numArray.push(num3);

    numArray.sort(function (a, b) {
        return a - b;
      }) 
    
    document.getElementById("Msg").innerHTML = numArray; 

    if(isNaN(num1)){
        document.getElementById("errorMsg").innerHTML = "Invalid Inputs";
    }

    if(isNaN(num2)){
        document.getElementById("errorMsg").innerHTML = "Invalid Inputs";
    }
    
    if(isNaN(num3)){
        document.getElementById("errorMsg").innerHTML = "Invalid Inputs";
    }
}