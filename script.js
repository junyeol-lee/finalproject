document.addEventListener("DOMContentLoaded",load);

function load(){


	/*Links*/
	let welcomePage = document.getElementById("welcomePage");
	let servicePage = document.getElementById("servicePage");
	let contactPage = document.getElementById("contactPage");

	welcomePage.addEventListener("click",function(){changePage("welcome")});
	servicePage.addEventListener("click",function(){changePage("service")});
	contactPage.addEventListener("click",function(){changePage("contact")});
	/*Sections*/
	let welcomeSection = document.getElementById("welcomeSection");
	let serviceSection = document.getElementById("serviceSection");
	let contactSection = document.getElementById("contactSection");

	//Default section setting. Welcomepage shows.
	welcomeSection.style.display = "block";
	serviceSection.style.display = "none";
	contactSection.style.display = "none";

	document.getElementById("orderform").addEventListener("submit",validate,false);
	document.getElementById("orderform").addEventListener("reset",hideErrors,false);
	hideErrors()
}

function changePage(pageNameIn){
	
	let pageName = pageNameIn;
	let welcomeSection = document.getElementById("welcomeSection");
	let serviceSection = document.getElementById("serviceSection");
	let contactSection = document.getElementById("contactSection");

	//Remove all the section from display.
	welcomeSection.style.display = "none";
	serviceSection.style.display = "none";
	contactSection.style.display = "none";

	//Display selected page only.
	document.getElementById(pageName+"Section").style.display	= "block";
}

function formHasErrors()
{
	let errorFlag = false;

	let requiredField = ["fullname","custphone","email"];

	for(let i = 0; i<requiredField.length; i++){
		var textField = document.getElementById(requiredField[i]);

		if(!formFieldHasInput(textField)){
			document.getElementById(requiredField[i]+"_error").style.display = "block";

			if(!errorFlag){
				textField.focus();
				textField.select();
			}
			errorFlag = true;
		}
	}
	//Valide email check.
	let email = document.getElementById("email");
	if((email.text == " " || email.text == null) && !email_check(email.value)){
		document.getElementById("emailformat_error").style.display = "block";
		if(!errorFlag){
			email.focus();
			email.select(); 
		}
		errorFlag = true;
	}
	return errorFlag;
}

function hideErrors()
{
	let errorFields = document.getElementsByClassName("error");

	for(let i = 0 ; i < errorFields.length; i++){
		errorFields[i].style.display = "none";
	}
}

function validate(e)
{
	hideErrors();
	if(formHasErrors()){
		e.preventDefault();
		return false;
	}
	return true;
}

 //Validate email. Paramiter email is user input. It returns ture when email form is correct or it returns false when it is wrong form.
 function email_check( email ) {
 	var regExp=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
 	if (!email.match(regExp)){
 		return false;
 	}
 	return true;
 }

 function formFieldHasInput(fieldElement){
 	if(fieldElement.value == null || trim(fieldElement.value) == ""){
 		return false;
 	}
 	return true;
 }

 function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}s