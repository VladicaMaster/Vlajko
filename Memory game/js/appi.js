var x;

var vreme_lako = 0;
var vreme_srednje = 0;
var vreme_tesko = 0;

var kliknuto = false;

var kartice_niz = [];
var kartice_vrednosti = [];  // U ovaj niz stavljamo vrednosti dve okrenute kartice
var kartice_id = [];
var kartice_brojac = 0;

Array.prototype.promesajNiz = function(){
    var i = this.length;
    var j;
    var pom;

    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        pom = this[j];
        this[j] = this[i];
        this[i] = pom;
    }
}

function igra(){
    var obj;
    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if (this.readyState==4 && this.status == 200) {
            obj = JSON.parse(this.responseText);

            // Citamo vremena potrebna za nivoe
            vreme_lako = obj.time[0].easy;
            vreme_srednje = obj.time[1].medium;
            vreme_tesko = obj.time[2].hard;
            

            // Punimo niz slikama iz JSON-a, tako sto svaku sliku postavimo u niz dva puta
            for( var i=0, j=0; i < obj.img.length; i++, j+=2)
            {
                kartice_niz[j] = obj.img[i];
                kartice_niz[j+1] = obj.img[i];
            }
            
        }
    }
    http.open('GET', 'karte.json', true);
    http.send();

}

function postaviKartice(){

    //Promesamo kartice da budu random
    kartice_niz.promesajNiz();

    var kartice_html = document.querySelectorAll('.card');
    var kartice_back = document.querySelectorAll('.back');

    for(var i = 0; i < kartice_niz.length; i++){

        kartice_back[i].innerHTML = '<img src="'+ kartice_niz[i].url +'">';
        kartice_html[i].value = kartice_niz[i].val;   // Dodajemo vrednost u div kako bi mogli da je prenesemo kada kliknemo na njega
        kartice_html[i].id = "kartica" + i;
        kartice_html[i].addEventListener('click', function (){ okreniKarticu(this, this.value); } );
    }
    
}


function okreniKarticu(kartica, vrednost){
       
       if(kartice_vrednosti.length < 2)
       {
        kartica.classList.toggle("flipped");   // kartica_1.classList.add("flipped");

      // Ako jos uvek nismo ni jednu karticu izabrali, onda je samo okrecemo
        if(kartice_vrednosti.length == 0){
            kartice_vrednosti.push(vrednost);
            kartice_id.push(kartica.id);
        } 
        else if(kartice_vrednosti.length == 1){   // Ako smo do sada izabrali jednu karticu, biramo drugu i poredimo ih-
            kartice_vrednosti.push(vrednost);
            kartice_id.push(kartica.id);
            
            // Proveravamo da li smo pogodili dve iste kartice
            if(kartice_vrednosti[0] == kartice_vrednosti[1]){
                kartice_brojac += 2;
                
                // Posle pogotka moramo za ispraznimo nizove u kojima cuvamo vrednosti i indekse za drugi put
                kartice_vrednosti = [];
                kartice_id = [];

                // Proveravamo da li smo pogodili sve parove
                if(kartice_brojac == kartice_niz.length){
                    alert("Bravo!");
                }

            }else {  // Ako nismo pogodili par okrecemo dve kartice nazad
                setTimeout(okreniNazadKartice, 1000);
        }
      }
    }
}


function okreniNazadKartice(){

                    // Okrecemo kartice nazad
                   var kartica_1 = document.getElementById(kartice_id[0]);
                   var kartica_2 = document.getElementById(kartice_id[1]);
                       
                       kartica_1.classList.toggle("flipped"); // kartica_1.classList.remove("flipped");
                       kartica_2.classList.remove("flipped");

                    // Cistimo oba niza
                    kartice_vrednosti = [];
                    kartice_id = [];
                
            }

function start(nivo){

if(!kliknuto){   // Proveravamo da li smo vec odabrali nivo
    switch(nivo)
    {
        case "lako":
        x = setInterval(lako, 1000);
        postaviKartice();
        break;
        case "srednje":
        x = setInterval(srednje, 1000);
        postaviKartice();
        break;
        case "tesko":
        x = setInterval(tesko, 1000);
        postaviKartice();
        break;
    }
    kliknuto = true;
 }   
}

function lako(){
    document.getElementById('p1').innerHTML= vreme_lako;
    if (vreme_lako<=0) {
        alert('Izgubio si!!!!')
        clearInterval(x);
    }
    vreme_lako--;
}

function srednje(){
    document.getElementById('p1').innerHTML= vreme_srednje;
    if (vreme_srednje<=0) {
        alert('Izgubio si!!!!')
        clearInterval(x);
    }
    vreme_srednje--;
}
function tesko(){
    document.getElementById('p1').innerHTML= vreme_tesko;
    if (vreme_tesko<=0) {
        alert('Izgubio si!!!!')
        clearInterval(x);
    }
    vreme_tesko--;
}