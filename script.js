// Api fetch function 
function getCurrentWeather(city) {

    let currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(currentWeatherApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
    