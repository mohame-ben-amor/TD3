tab=[0,0,0];

function glace() {
	tab[0]++;
}
function film(){
	tab[1]++;
}

function ville(){
	tab[2]++;
	console.log(tab);
}
console.log(tab);

function verif(){
	if (tab[0]>=1 && tab[1]>=2 && tab[1]<=3 && tab[2]>=1){
		alert('jawek mnadham');
	}
	else {
		alert('8alet a baba 3awed');
	}
}