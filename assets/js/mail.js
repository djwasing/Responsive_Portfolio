

var submit= document.getElementById("submit");

submit.addEventListener("click", function(event){
    
    var fname= document.getElementById("fname").value;
    var lname= document.getElementById("lname").value;
    var email= document.getElementById("email").value;
    var say_something= document.getElementById("say_something").value;
    //console.log(fname, lname, email, say_something);
    document.getElementById("submit").setAttribute("href", `mailto:dwasinger90@gmail.com?subject=Message From: ${fname} ${lname}&body=${say_something} - Sender Email: - ${email}`);
   
})

