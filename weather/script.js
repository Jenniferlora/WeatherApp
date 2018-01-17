$(function() {
	console.log('key:7ea8ce2fca75f0992d145322b6996de9');
	$('#submit').on('click', function(event) {
		var input = $('#zipcode').val();
		makeCall(input);
	});

	function makeCall(zipcode) {
		$.ajax(
			`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=7ea8ce2fca75f0992d145322b6996de9`,
			{
				success: function(data) {
					console.log(data);
					getData(data);
				},
			}
		);
	}

	function getData(responseData) {
		var city = responseData.name;
		console.log(city);
		var currentTemp = responseData.main.temp;
		console.log(currentTemp);
		var description = responseData.weather[0].description;
		console.log(description);
		var minTemp = responseData.main.temp_min;
		console.log(minTemp);
		var maxTemp = responseData.main.temp_max;
		console.log(maxTemp);
		appendToDom(city, currentTemp, description, minTemp, maxTemp);

		var latitude = responseData.coord.lat;
		console.log(latitude);
		var longitude = responseData.coord.lon;
		console.log(longitude);
		var humidity = responseData.main.humidity;
		console.log(humidity);
		var windspeed = responseData.wind.speed;
		console.log(windspeed);
		appendMore(latitude, longitude, humidity, windspeed);
	}

	// - This function will take each of these parameters and create appropriate elements for each.
	//     - It will then append the elements to the DOM.

	function appendToDom(city, currentTemp, description, minTemp, maxTemp) {
		var params = [city, currentTemp, description, minTemp, maxTemp];
		var result = document.querySelector('#result');

		var list = document.createElement('ul');
		list.classList.add('thelist');
		result.appendChild(list);

		params.forEach(function(each) {
			var newDiv = document.createElement('li');
			newDiv.textContent = each;
			newDiv.style.listStyleType = 'none';
			list.appendChild(newDiv);
		});
	}

	function appendMore(latitude, longitude, humidity, windspeed) {
		var moreParams = [latitude, longitude, humidity, windspeed];
		var thelist = document.querySelector('.thelist');
		moreParams.forEach(function(each) {
			var newDiv = document.createElement('li');
			newDiv.textContent = each;
			newDiv.style.listStyleType = 'none';
			thelist.appendChild(newDiv);
		});
	}
}); // ends doc.ready
