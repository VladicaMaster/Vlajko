var obj;
/*
function read(){
  

   var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            obj = JSON.parse(this.responseText);
            //alert(this.responseText);
 
        }
    };
    xhttp.open("GET", "phonebook.json", true);
    xhttp.send();

}
*/

function setBook(){

    var data = [];

    var fname= document.getElementById('name').value;
    var last_name = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;

    if( JSON.parse(localStorage.getItem('data')) == null ){
    }
    else
    {
    data = JSON.parse(localStorage.getItem('data'));
    
    clearDatebase();
    }

    var object= new Object();

    object.fname= fname;
    object.last_name= last_name;
    object.phone= phone; 
    data.push(object);

    localStorage.setItem('data',JSON.stringify(data));
    
}

function clearDatebase(){

  localStorage.clear();
}
    
function search(){

var datebase= JSON.parse(localStorage.getItem('data'));

 var result =  document.getElementById('searching').value;
 var note = document.getElementById('note');
 note.innerHTML = "";
 
for(var i=0; i<datebase.length; i++)
{
   if(result == datebase[i].fname){
        note.innerHTML+= 'Data: '+ datebase[i].fname +" "+datebase[i].last_name+"<BR>";
       }
       else if (result == datebase[i].last_name) {
        note.innerHTML+= 'Data: '+ datebase[i].last_name +" "+ datebase[i].fname+"<BR>";
       }
}

  //Ovako bi trebalo da se odradi pretraga sa pravom bazom
   /* for (var i = obj.phoneBook.length - 1; i >= 0; i--) {
       if (result == obj.phoneBook[i].fname) {
        alert('Founded');
        document.getElementById('note').innerHTML= 'Datas: '+obj.phoneBook[i].fname;
       }
       else if (result == obj.phoneBook[i].lastName) {
        alert('Founded');
        document.getElementById('note').innerHTML+= 'Datas: '+obj.phoneBook[i].lastName + obj.phoneBook[i].fname;
       }
       else
        alert('Error')
    }*/

}

function printDatebase(){

var datebase= JSON.parse(localStorage.getItem('data'));

if(datebase==""){
    document.getElementById('note').innerHTML="Datebase is emprty!";
}
else{
var result =  document.getElementById('searching').value;
var note = document.getElementById('note');
note.innerHTML = "";
 
for(var i=0; i<datebase.length; i++){
  document.getElementById('note').innerHTML+=(i+1) +' '+ datebase[i].fname+" "+ datebase[i].last_name+" "+ datebase[i].phone+'<button type="button"  value="'+datebase[i].last_name+'" onclick="deleteEntry(this.value)">Delete</button><BR>';
}

}
}

function deleteEntry(value){

    var datebase= JSON.parse(localStorage.getItem('data'));

    for(var i=0; i<datebase.length; i++){
      if(value == datebase[i].last_name){
        datebase.splice(i, 1);
        clearDatebase();
        localStorage.setItem('data',JSON.stringify(datebase)); 
        break;
      }
}

printDatebase();

}