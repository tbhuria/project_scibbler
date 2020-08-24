function removeCard(card){
	document.getElementById(card).parentNode.removeChild(document.getElementById(card));
}

function redirect(){
	window.location.href = "../html/post.html";	
}



//Post1 delete modal
var deleteModal1 = document.getElementById('deletePost1');

var span1 = document.getElementById('no-btn1');

var btn1 = document.getElementById('trash1');

btn1.onclick = function() {
    deleteModal1.style.display="block";
}

span1.onclick = function() {
    deleteModal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == deleteModal1) {
      deleteModal1.style.display = "none";
    }
}


//Post2 delete modal
var deleteModal2 = document.getElementById('deletePost2');

var span2 = document.getElementById('no-btn2');

var btn2 = document.getElementById('trash2');

btn2.onclick = function() {
    deleteModal2.style.display="block";
}

span2.onclick = function() {
    deleteModal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == deleteModal2) {
      deleteModal2.style.display = "none";
    }
}


//Post3 delete modal
var deleteModal3 = document.getElementById('deletePost3');

var span3 = document.getElementById('no-btn3');

var btn3 = document.getElementById('trash3');

btn3.onclick = function() {
    deleteModal3.style.display="block";
}

span3.onclick = function() {
    deleteModal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == deleteModal3) {
      deleteModal3.style.display = "none";
    }
}


//Post4 delete modal
var deleteModal4 = document.getElementById('deletePost4');

var span4 = document.getElementById('no-btn4');

var btn4 = document.getElementById('trash4');

btn4.onclick = function() {
    deleteModal4.style.display="block";
}

span4.onclick = function() {
    deleteModal4.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == deleteModal4) {
      deleteModal4.style.display = "none";
    }
}

//Post5 delete modal
var deleteModal5 = document.getElementById('deletePost5');

var span5 = document.getElementById('no-btn5');

var btn5 = document.getElementById('trash5');

btn5.onclick = function() {
    deleteModal5.style.display="block";
}

span5.onclick = function() {
    deleteModal5.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == deleteModal5) {
      deleteModal5.style.display = "none";
    }
}









