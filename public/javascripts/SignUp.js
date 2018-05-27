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



function dissapear_IFN(){
	//Text dissappear
	document.getElementById("Indfirstname").value="";
}

function dissapear_ILN(){
	//Text dissappear
	document.getElementById("Indlastname").value="";
}

function dissapear_IEM(){
	//Text dissappear
	document.getElementById("Indemail").value="";
}



function dissapear_CFN(){
	//Text dissappear
	document.getElementById("Cfirstname").value="";
}

function dissapear_CLN(){
	//Text dissappear
	document.getElementById("Clastname").value="";
}

function dissapear_CEM(){
	//Text dissappear
	document.getElementById("Cemail").value="";
}


function SubmitFormI(){

}




