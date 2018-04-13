// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function opentab(evt, parameter) {
    var i, SignUpContent, tablinks;
    SignUpContent = document.getElementsByClassName("SignUpContent");
    for (i = 0; i < SignUpContent.length; i++) {
        SignUpContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(parameter).style.display = "block";
    evt.currentTarget.className += " active";
    

}
