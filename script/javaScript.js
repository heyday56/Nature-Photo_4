"use strict"
let index=0;
let inner=1;
function sayWelcome(){
	const welcome=["W","e","l","c","o","m","e"];
  	let massege=document.getElementById("massege");
	if(index<7 && inner===1){
  		if (index===0) {
		massege.textContent="";
	}
  massege.textContent=massege.textContent+welcome[index];
index++;}else{
	if (index===7) {
		massege.textContent="Welcome";
	}
	let text=massege.textContent;
	massege.textContent=massege.textContent.substr(inner,text.lenght);
	inner+=1;
	if (inner==7) {
	inner=1;
	index=0;
	}
}
window.setTimeout(sayWelcome,1000);
}

function loginValidate(){
	const username=document.getElementById("username").value;
	const pass=document.getElementById("password").value;
	if(pass.indexOf(" ")>-1 || pass.indexOf("  ")>-1 ||pass.indexOf("=")>-1){
		document.getElementById("errPass").textContent='Invalide Password or username, Please do not use =," "';
		return false;
	}
	if(username.indexOf(" ")>-1 || username.indexOf("  ")>-1 ||username.indexOf("=")>-1){
		document.getElementById("errPass").textContent='Invalide Password username, Please do not use =," "';
		return false;
	}
	return true;
}