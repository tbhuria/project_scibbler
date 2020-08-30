var queryStr = new Array(); // to read query params from request string
window.onload = function () {
    if (queryStr.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            for (var i = 0; i < params.length; i++) {
                queryStr[params[i].split('=')[0]] = decodeURIComponent(params[i].split('=')[1]);
            }
        }
    }
    if (queryStr["heading"] != null && queryStr["author"] != null) {
        document.getElementsByClassName("heading-content")[0].innerHTML = queryStr["heading"];
        document.getElementsByClassName("author-name")[0].innerHTML = queryStr["author"];
        document.getElementsByClassName("post-content")[0].innerHTML = queryStr["content"];
    }
    document.getElementById('comments').style.visibility = 'hidden';
};

var editMode = false; // to keep track of editable mode of content
var flag = 0;
function editHeaderAndContent(){
   flag = flag + 1;
    if(!editMode) {
    document.getElementById("editHeading").style.borderWidth = "1px";
    document.getElementById("editHeading").style.borderStyle = "solid";
    document.getElementById("editHeading").style.borderColor = "red";

    document.getElementById("editContent").style.borderWidth = "1px";
    document.getElementById("editContent").style.borderStyle = "solid";
    document.getElementById("editContent").style.borderColor = "red";
    
    document.getElementById("editBtn").innerHTML = 'Save<i class="fa fa-save" style="padding-left: 4px;"></i></button>';
    editMode = true;    
    } else {
        if(flag === 2){
            document.getElementById("editHeading").innerHTML = "<span>UPDATED:</span>" + document.getElementById("editHeading").innerHTML;
            document.getElementById("editContent").innerHTML = "<div>UPDATED:</div>" + document.getElementById("editContent").innerHTML;
        }

        document.getElementById("editContent").style.border = "none";
        document.getElementById("editHeading").style.border = "none";

        document.getElementById("editBtn").innerHTML = 'Edit<i class="fa fa-edit" style="padding-left: 4px;"></i>';
        document.getElementById("editBtn").disabled = true;
    }   
}

var count = 0;
function updateLikes(){
    count = parseInt(count)+parseInt(1);
    document.getElementById("likeButton").innerHTML = "Liked";
    if(count==1) 
        document.getElementById("showCount").innerHTML= count +" person likes this !";
    else
        document.getElementById("showCount").innerHTML= count +" people like this !";
}

var comments = [];
function addComment(comment){
    if(comment.value !== ''){
        document.getElementById('comments').style.visibility = 'visible';
        var comment = comment.value;
        comments.unshift(comment);
        $("#comment").val('');
        this.comments.forEach(addToComments);
        $(document).scrollTop($(document).height()); 
    }
}

function addToComments(item, index){
    var tempComment = document.getElementById("comments").innerHTML;
    document.getElementById("comments").innerHTML = '<div class="comment">'+item+'</div>' + '</br>';
    document.getElementById("comments").innerHTML += tempComment + '</br>';
    comments.pop();
}