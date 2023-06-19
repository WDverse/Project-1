//Get the current day
var day = moment().format("dddd | MMMM Do YYYY");
var cardDay = $(".cardDay").text(day);

// Relevant elements for weather functions
var searchButton = document.getElementById("searchButton");
var cityEl = document.getElementById("cityName");
var currTemperature = document.getElementById("temperature");
var weatherDesc = document.getElementById("weatherDesc");
var weatherCard = document.getElementById("weather-card");
weatherCard.style.display = "none";

function getWeather(cityName) {
  // Get the weather for the most recently searched city
  var weatherURL =
    "http://api.weatherapi.com/v1/current.json?key=8eec726f852f4f3d83e03157231306&q=" +
    cityName;

  fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      cityEl.textContent = cityName;

      // Populate the weatehr card with relevant info
      currTemperature.innerHTML =
        data.current.temp_c + '<span class="symbol">&deg;</span>C';
      weatherDesc.textContent =
        "Current Weather: " + data.current.condition.text;
      document.getElementById("weatherIcon").src =
        "https:" + String(data.current.condition.icon);

    // Call the hotel function to populate hotel list simultaneously with weather
      getHotel(String(data.location.lat + "%2C" + data.location.lon));
    });
}
// Collect city name from the text box and use it to collect and display information
function setCity(event) {
  event.preventDefault();
  var cityName = document.getElementById("searchHotels").value;
  getWeather(cityName);
  weatherCard.style.display = "block";
}

// Clickable buttons relevant to weather functions
searchButton.addEventListener("click", setCity);
