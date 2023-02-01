//storing api key

const submitButton = document.getElementById("search-button");
const inputBox = document.getElementById("city-input");
const apiKey = "e005f427432a127e4dbd6f5d523c847e";
const cityName = document.getElementById("city-name");
const currentDate = moment().format("(L)");
const currentTemperature = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
const currentWindSpeed = document.getElementById("wind-speed");
const currentUV = document.getElementById("UV-index");
const currentIcon = document.getElementById("current-icon");
const forecast = document.querySelector(".forecast");
const current = document.querySelector(".current")
const historyElement = document.getElementById("history");

// Api fetch function
function getCurrentWeather(city) {

    let currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(currentWeatherApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        let nameValue = data.name;
        cityName.innerHTML = nameValue + " " + currentDate;
        console.log(nameValue);
  
        let currentIconValue = data.weather[0].icon;
        currentIcon.innerHTML = "Icon:" + currentIconValue;
        currentIcon.setAttribute(
          "src",
          "https://openweathermap.org/img/wn/" + currentIconValue + "@2x.png"
        );
        console.log(currentIconValue);
        
        let tempValue = data.main.temp;
        let celsiusTemp = tempValue - 273.15;
        currentTemperature.innerHTML =
          "Temp:" + " " + Math.floor(celsiusTemp) + "°C";
        console.log(tempValue);
  
        let humidityValue = data.main.humidity;
        currentHumidity.innerHTML = "Humidity:" + " " + humidityValue + "%";
        console.log(humidityValue);
  
        let windSpeedValue = data.wind.speed;
        currentWindSpeed.innerHTML = "Wind:" + " " + windSpeedValue + " " + "MPH";
        console.log(windSpeedValue);