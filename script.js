/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
function draw()
{
}
/*
function validateForm(form)
{
    console.log("checkbox checked is ", form.agree.checked);
    if(!form.agree.checked)
    {
        document.getElementById('agree_chk_error').style.visibility='visible';
        return false;
    }
    else
    {
        document.getElementById('agree_chk_error').style.visibility='hidden';
        return true;
    }
}
*/


var user_input;

function othername() {
            user_input = document.getElementById("uname").value;
            //alert(user_input);
  
          }

function getName()
{
    return user_input;
}




 /* function myFunction()
  {
    console.log("yo");
    var a=document.getElementById("student");
    console.log("a value:" + a);

    if (a.checked)
    {
      console.log("student");
      location.replace("./TeenStartCall.html");


    }
    else
    {
      window.location.href = "./ElderAcceptCall.html";
      console.log("elder");

     //<a href="./ElderAcceptCall.html">Sign In for Elders</a>
    }
}*/
  


