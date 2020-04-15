
var tab= ['guardians_1.jpg','guardians_2.jpg','dragon_blue_1.jpg','dragon_blue_2.jpg'];
var myVar;


function start(){
	myVar = setInterval(myTimer,1000);
}
var i=0;
var imgtr=document.getElementById('img');


		
function myTimer(){
	i=0;
	imgtr.style.display='initial';
if (i==3){
	i= 0;
	}
	else {
		i++;
	}

	imgtr.innerHTML='<img src="'+tab[i]+'">';
}

function stop(){
	clearInterval(myVar);
}

function reload(){
	imgtr.style.display='none';
}