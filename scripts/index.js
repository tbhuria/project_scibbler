function switchToBloglist()
{
 window.location.href="html/postslist.html";
}


var postModal = document.getElementById("postModal");

// Get the button that opens the modal
var btn3 = document.getElementById("create_posts");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
    postModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    postModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == postModal) {
        postModal.style.display = "none";
    } 
}