var counter = 1;
var numberOfImages2018 = 28;
var pagination= document.getElementById('pagination');

function load(year)
{
	var gallery = document.getElementsByClassName("img");

	var i;
	for(i=0; i< 9; i++)
	{
       gallery[i].src= "Gallery"+ year +"/image"+counter+".jpg";
       gallery[i].id = counter;
       gallery[i].onclick = function (){ openWin('2018', '1'); };
       counter++;
	}

	
strane()


	
}

function strane(){
		for (var i = 1; i < numberOfImages2018; i++) {

			
			pagination.innerHTML = (i %9 ) +'/'+ numberOfImages2018;
				
	}
}

function loadNext(year)
{

for (var i = 1; i < numberOfImages2018; i++) {

		i++
			pagination.innerHTML = (i%9)+'/'+ numberOfImages2018;
			if ((i%9)<=10) {
				pagination.innerHTML= (i%9)+'/'+ numberOfImages2018;
			}
					
	}
if(counter <= numberOfImages2018)
{
   var gallery = document.getElementsByClassName("img");

	var i;
	for(i=0; i< gallery.length; i++)
	{
	   if(counter <= numberOfImages2018)
	   {
       gallery[i].src= "Gallery"+ year +"/image" + counter +".jpg";
       gallery[i].id = counter;
       gallery[i].onclick = function (){ openWin('2018', '1'); };

       counter++;
       }
       else
       {
       gallery[i].src= "";
       counter++;
       }
	}
}

	
}

function loadPrevious(year)
{

	for (var i = 1; i < numberOfImages2018; i++) {

		
			pagination.innerHTML = (i%9)+'/'+ numberOfImages2018;

					
	}
	if( counter > 10 )
	{
     
    counter = counter - 18;
    var gallery = document.getElementsByClassName("img");

	var i;
	for(i=0; i< gallery.length; i++)
	{
	   
       gallery[i].src= "Gallery"+year+"/image" + counter +".jpg";
       gallery[i].id = counter;
       gallery[i].onclick = function (){ openWin('2018', '1'); };
       counter++;
       
	}

	}
	
}

function openWin(year, counter)
{
	var x = window.open('window.html');
	loadImg(year, counter);
}

function loadImg(year, counter)
{
    var image = document.getElementById(counter);

}