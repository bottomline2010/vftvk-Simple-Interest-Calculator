function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) /100;
    var years = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit $ "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of $ "+interest+"\<br\>in the year "+years+".\<br\>"
}
    

function checkData()   //Popup box if user enters negative or zero number//
{
  var x = document.getElementById("principal").value;
   	
  if (x<"1")
    {
    alert("Please enter a positive Number");
           x.focus();
            return false;
     }
    if (x=="")
     {
            alert ("Please enter a positive Number")
            x.focus();
              return false;
           
      }
        else {
           return true;
                }

  }