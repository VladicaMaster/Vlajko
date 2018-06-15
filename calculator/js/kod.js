//funkcija za dodavanje vrednosti u input polje
function number(value){
		if(!( value.match(/[0\-\+\*\/]/) && document.form1.result.value.match(/[-+*\/]$/)))
	{
	  document.form1.result.value +=value;
	} 
	if (document.form1.result.value.charAt(0)=='0') {
		document.form1.result.value='';
	}
			
}
	//funkcija za brisanje rezultata
	function cle(value){
		document.form1.result.value =value;
	}

	//funkcija za izracunavanje 
	function evalua(){
		
		document.form1.result.value = eval(document.form1.result.value);
	}



//funkcija za dodavanje eventova na dugmice
var dugmici =	document.getElementsByClassName('but');

function calc(){
for (var i = 0; i < dugmici.length; i++) {
	dugmici[i].addEventListener('click', function(){
		number(this.value);});
}

document.getElementById('clear').addEventListener('click', function(){
	cle(this.value);
} );

document.getElementById('eqe').addEventListener('click', evalua);

	}


