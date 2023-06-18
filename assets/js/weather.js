// Relevant elements for weather functions 
var searchButton = document.getElementById("searchButton");
var cityEl = document.getElementById("cityName");
var currTemperature = document.getElementById("temperature");
var weatherDesc = document.getElementById("weatherDesc");
var weatherCard = document.getElementById("weather-card");
weatherCard.style.display = 'none';


// Set content for weather elements and buttons
var lastCity = localStorage.getItem("lastCity");
var lastTemp = localStorage.getItem("lastTemp");
var lastCond = localStorage.getItem("lastCond");
document.getElementById("weatherIcon").src = "https:" + String(localStorage.getItem("weatherIcon"));
cityEl.textContent = lastCity;

function getWeather(cityName) {
    // Get the weather for the most recently searched city
    var weatherURL = "http://api.weatherapi.com/v1/current.json?key=8eec726f852f4f3d83e03157231306&q=" + cityName;

    fetch(weatherURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            cityEl.textContent = cityName;

            currTemperature.textContent = "Current Temperature: " + data.current.temp_c + " ºC";
            weatherDesc.textContent = "Current Weather: " + data.current.condition.text;
            document.getElementById("weatherIcon").src = "https:" + String(data.current.condition.icon);
            localStorage.setItem("lastTemp", data.current.temp_c);
            localStorage.setItem("lastCond", data.current.condition.text);
            localStorage.setItem("weatherIcon", data.current.condition.icon);
            
            // Collect lat/lon from weather API to pass into the hotel search
            getHotel(String(data.location.lat + "%2C" + data.location.lon));
        });
}