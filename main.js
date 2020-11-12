// JavaScript Document

var username; //creating a variable for user name

username = prompt("Please enter your name."); //user message to enter name

document.getElementById("user_information").innerHTML = "Welcome " + username + ", my name is Fatima Khan!"; //welcome message
	
	// document.getElementById("user_information").style.textSize = "100px";


document.getElementById("p3").innerHTML = "Ryerson University 2016-2021"; //change text to heading

document.getElementById("nagivation").style.backgroundColor = "black"; //change color to navigation bar header

document.getElementById("header0").style.color = "white";
document.getElementById("header0").style.backgroundColor = "black"; //changing background color for profile

document.getElementById("header1").style.color = "white";
document.getElementById("header1").style.backgroundColor = "black"; //changing background color for education

document.getElementById("header2").style.color = "white";
document.getElementById("header2").style.backgroundColor = "black"; //changing background color for courses and projects

document.getElementById("header3").style.color = "white";
document.getElementById("header3").style.backgroundColor = "black"; //changing background color for awards

document.getElementById("header4").style.color = "white";
document.getElementById("header4").style.backgroundColor = "black"; //changing background color for extra curricular

document.getElementById("nagivation2").style.backgroundColor = "black"; //change color to navigation bar footer
document.getElementById("nagivation2").style.textAlign = "center"; //centring the footer navigation bar


/* function mOver(obj) {
	obj.innerHTML = "Thank You"
	obj.style.color = "blue";
}

function mOut(obj) {
	obj.innerHTML = "Mouse Over Me"
	obj.style.color = "orange";
}*/