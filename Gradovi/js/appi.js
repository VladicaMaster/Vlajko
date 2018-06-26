$('#butt').click(function(){
		var grad= $('#grad').val();
		var zemlja = $('#zemlja').val();

		$.ajax('https://api.openweathermap.org/data/2.5/weather?q='+grad+','+zemlja+'&appid=1384eff7759c6a754d37878aaa944cdb&lang=hr&units=metric',
		{
			type:'GET',
			dataType:'JSON',
			success:function(data){

				$('#city').html(data.name);
				$('#Temp').html(data.main.temp).append(' C');
				$('#coo').html('lon:'+data.coord.lon).append(' lat:'+data.coord.lat);
				//alert(data.sys.sunset);
				$('#vreme').html(data.visibility + ' m');
				$('#uslovi').html(data.weather[0].description);
			/*
				var pocetak = data.sys.sunrise;
				var kraj= data.sys.sunset;
				var sekund = Math.floor(pocetak/1000)%60;
		  		var minut = Math.floor(pocetak/60/1000)%60;
		  		var sat = Math.floor(pocetak/(60*60)/1000); 
		  		
		  		var sekund1 = Math.floor(kraj/1000)%60;
		  		var minut1 = Math.floor(kraj/60/1000)%60;
		  		var sat1 = Math.floor(kraj/(60*60)/1000); 
    
				$('#sunr').html(sat + 'h ' + minut + 'm ' + sekund+ 's');
				$('#suns').html(sat1 + 'h ' + minut1 + 'm ' + sekund1 + 's')*/


				
			},
			error:function(err){
				console.log(err);
			},
		});
	})