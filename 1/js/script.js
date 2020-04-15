function Alerts() {
document.getElementById('image').innerHTML='<img src="img/guardians_2.jpg">';
  alert("Hello! I am an alert box!");
}

function nuit(){
	document.getElementById('color').style.backgroundColor = '#414042';
	document.getElementById('nuit').style.display='none'
}

function normal(){
	document.getElementById('color').style.backgroundColor = '#fff';
	document.getElementById('image').style.display='none';
	document.getElementById('nuit').style.display='initial';
}