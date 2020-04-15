
toul =document.getElementById('pseudo').value;
console.log(toul.length);

function verifMail(){
// var pseudoformat = /^\w+([\.-]?\w+){2,26}+$/;
var toul =document.getElementById('pseudo').value;

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if((document.getElementById('mail').value.match(mailformat))
	&& (toul.length >=2 && toul.length<27))
{
return true;
}
else
{
alert("You have entered an invalid email address or Pseudo!");
document.form1.pseudo.focus();
return false;
}
}

