/*
form validation
*/

var check = function() {

var pass = document.getElementById('password').value == '';
var cpass = document.getElementById('confirm_password').value =='';

var passLevel = passLvl(document.getElementById('password').value)
 
//	console.log(passLevel)

switch(passLevel) {
        case 2:
	    document.getElementById('lvlmsg').innerHTML = 'password strength: Medium';
            break;
        case 3:
            document.getElementById('lvlmsg').innerHTML = 'password strength: Strong'
            break;
        default:
            document.getElementById('lvlmsg').innerHTML = 'password strength: Weak'
            break;
}


if ( pass || cpass){
document.getElementById('message').innerHTML = '';
}else{
if (document.getElementById('password').value ==
document.getElementById('confirm_password').value) {
document.getElementById('message').style.color = 'green';
document.getElementById('message').innerHTML = 'matching';

} else {
document.getElementById('message').style.color = 'red';
document.getElementById('message').innerHTML = 'not matching';

}
}
}

function formSubmit(){

	var formData = new FormData(document.querySelector('form'))
	const data = {}
	for (const [key,value] of formData.entries()) {
		 data[key] = value;	
	}
	var fName = data.firstname;
	var lName = data.lastname;
	var occup = data.occupation;
	var remb = data.remember;
	var pass = data.password;
	var cPass = data.confirm_password;
	var chkPass = passLvl(pass);
	console.log(occup)	

	if (fName == '' && lName == '' && pass == '' && cPass == '' && occup == "none"){
		alert("please fill the form")
		document.getElementById('msg').innerHTML = 'please fill ';		
	}else if(fName == '') {
		document.getElementById('msg').innerHTML = 'please enter your firstname';
		document.getElementById('firstname').focus();
	}else if(lName == '') {
		document.getElementById('msg').innerHTML = 'please enter your lastname';
		document.getElementById('lastname').focus();
	}else if(pass == '') {
		document.getElementById('msg').innerHTML = 'please enter your password';
		document.getElementById('password').focus();
	}else if(cPass == '') {
		document.getElementById('msg').innerHTML = 'please confirm your password';
		document.getElementById('confirm_password').focus();
	}else if(pass !== cPass) {
		document.getElementById('msg').innerHTML = 'failed to confirm password';
		document.getElementById('confirm_password').focus();
	}else if(pass.length < 6 || chkPass < 2) {
		document.getElementById('msg').innerHTML = 'password length must be greater than 5 and must include Uppercase, Lowercase, Number or Special character';
		document.getElementById('confirm_password').focus();
	}
	else if(occup == undefined) {
		document.getElementById('msg').innerHTML = 'please choose your occupation';
		document.getElementById('ocp').focus();
	}else{
	if(remb === undefined) remb = "not checked";
	alert(`Your form is submitted successfully \n First Name: ${fName} \n Last Name: ${lName} \n Occupation: ${occup} \n remember me is ${remb}`)
	location.reload();
	}
}
	


function passLvl(pwString) {
    var strength = 0;
    var lvl = 1;
    strength += /[A-Z]+/.test(pwString) ? 0.5 : 0;
    strength += /[a-z]+/.test(pwString) ? 0.5 : 0;
    strength += /[0-9]+/.test(pwString) ? 1 : 0;
    strength += /[\W]+/.test(pwString) ? 1 : 0;
    
    if(pwString.length > 5) {strength += 1;}  
    	// console.log(strength)
	switch(strength) {
        case 3:
            lvl = 2  //"its's medium!"
            break;
        case 4:
            lvl = 3  //"it's strong!"
            break;
        default:
            lvl = 1 // "it's weak!"
            break;
    }
	return lvl;
//	console.log(lvl)

}