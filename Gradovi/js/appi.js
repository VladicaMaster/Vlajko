$('#butt').click(function(){
		var grad= $('#grad').val();
		var zemlja = $('#zemlja').val();

		$.ajax('https://api.openweathermap.org/data/2.5/weather?q='+grad+','+zemlja+'&appid=1384eff7759c6a754d37878aaa944cdb&lang=en&units=metric',
		{
			type:'GET',
			dataType:'JSON',
			success:function(data){

				$('#city').html(data.name).hide().fadeIn(2000);
				$('#Temp').html(data.main.temp).append(' C').hide().fadeIn(2000);
				$('#coo').html('lon:'+data.coord.lon).append(' lat:'+data.coord.lat).hide().fadeIn(2000);
				//alert(data.sys.sunset);
				$('#vreme').html(data.visibility + ' m').hide().fadeIn(2000);
				$('#uslovi').html(data.weather[0].description).hide().fadeIn(2000);
			
				var pocetak = data.sys.sunrise * 1000;
				var kraj= data.sys.sunset*1000;
				
				var dan= new Date(pocetak);
				var minut1= dan.getMinutes();
				var sat1= dan.getHours();
				//var izlazak= sat1 + 'h'+minut1+'m';

				var dan1=  new Date(kraj);
				var minut2= dan1.getMinutes();
				var sat2= dan1.getHours();
				//alert(izlazak);
		  		
		  		
    
				$('#sunr').html(sat1 + 'h ' + minut1 + 'm ').hide().fadeIn(2000);
				$('#suns').html(sat2 + 'h ' + minut2 + 'm ').hide().fadeIn(2000);


				
			},
			error:function(err){
				console.log(err);
			},
		});
	})