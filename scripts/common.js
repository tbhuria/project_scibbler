var modalSignUp = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("SignUp");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modalSignUp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modalSignUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    } 
}

var modalSignIn = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("SignIn");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modalSignIn.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modalSignIn.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignIn) {
        modalSignIn.style.display = "none";
    } 
}


function signupOption()
{
    var modal=document.getElementById('myModal2');
    var modal1=document.getElementById('myModal1');
    modal1.style.display="block";
    modal.style.display="none";
}