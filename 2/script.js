
var tab= ['guardians_1.jpg','guardians_2.jpg','dragon_blue_1.jpg','dragon_blue_2.jpg'];
var i=0;
document.getElementById('img').innerHTML='<img src="'+tab[i]+'">';
var test=true;
function stopp(){
	this.test=false;
}

function inc(test) {
	this.test=test;
	if (test == true){
		return;
	}
	else {
	if (i==3){
		i= 0;
	}
	else {
		i++;
		}
	
	document.getElementById('img').innerHTML='<img src="'+tab[i]+'">';

	console.log(tab[i]);
	console.log(i);
}
}
function dec() {
	if (i ==0){
		i=3;
	}
	else {
			i--;
	}
	document.getElementById('img').innerHTML='<img src="'+tab[i]+'">';

}
console.log(i);
