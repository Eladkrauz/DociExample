function checkRegister(){
	var name = document.getElementById('Name').value;
	var id = document.getElementById('ID').value;
	var age = document.getElementById('age').value;
	var gender = document.getElementById('gender').selected;
	var diseases = document.getElementById('diseases').value;
	var alertMsg = "Thanks for filling your details.";
	var flag = 1;
	var i = 0;
	
	for (let i = 0; i < name.length; i++) {
		if (!((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z') || (name[i] >= 'א' && name[i] <= 'ת'))) {
			flag = 0;
		}
	}
	if(trim(name) == '' || flag != 1) {
		alertMsg = alertMsg + "\nPlease enter a correct name.";
	}
	
	flag = 1;
	for (let i = 0; i < id.length; i++) {
		if (id[i] < '0' || id[i] > '9') {
			flag = 0;
		}
	}
	if(id.length != 9 || trim(id)=='' || flag != 1) {
		alertMsg = alertMsg + "\nPlease enter a valid identification number.";
	}
	
	flag = 1;
	for (let i = 0; i < age.length; i++) {
		if (age[i] < '0' || age[i] > '9') {
			flag = 0;
		}
	}
	if(Number(age) < 0 || Number(age) > 120 || trim(age)=='' || flag != 1) {
		alertMsg = alertMsg + "\nPlease enter a valid age.";
	}
	alert (alertMsg);
}

function checkLogin(){
	var name = document.getElementById('Name').value;
	var id = document.getElementById('ID').value;
	var check = 0;
	var flag = 1;
	var i = 0;
	
	for (let i = 0; i < name.length; i++) {
		if (!((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z') || (name[i] >= 'א' && name[i] <= 'ת'))) {
			flag = 0;
		}
	}
	if(trim(name) == '' || flag != 1) {
		check = check + 1;
	}
	
	flag = 1;
	for (let i = 0; i < id.length; i++) {
		if (id[i] < '0' || id[i] > '9') {
			flag = 0;
		}
	}
	if(id.length != 9 || trim(id) == '' || flag != 1) {
		check = check + 1;
	}
	if (check >= 1) {
		alert ('Please make sure you filled all the details.');
	}
	else {
		document.getElementById('change').innerHTML = 'Take Care!';
	}
}

function trim (str)
{
     return str.replace (/^\s+|\s+$/g, '');
}