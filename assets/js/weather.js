// Relevant elements for weather functions 
var searchButton = document.getElementById("searchButton");
var city = document.getElementById("cityName");
var currTemperature = document.getElementById("temperature");
var weatherDesc = document.getElementById("weatherDesc");


// Set content for weather elements and buttons
var lastCity = localStorage.getItem("lastCity");
var lastTemp = localStorage.getItem("lastTemp");
var lastCond = localStorage.getItem("lastCond");
document.getElementById("weatherIcon").src = "https:"+String(localStorage.getItem("weatherIcon"));
city.textContent = lastCity;


// Get the weather for the most recently searched city
var weatherURL = "http://api.weatherapi.com/v1/current.json?key=8eec726f852f4f3d83e03157231306&q="+lastCity;

fetch(weatherURL)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    currTemperature.textContent = "Current Temperature in "+lastCity+": "+data.current.temp_c+" C";
    weatherDesc.textContent = "Current Weather in "+lastCity+": "+data.current.condition.text;
    document.getElementById("weatherIcon").src = "https:"+String(data.current.condition.icon);
    localStorage.setItem("lastTemp", data.current.temp_c);
    localStorage.setItem("lastCond", data.current.condition.text);
    localStorage.setItem("weatherIcon", data.current.condition.icon);

});

// Collect city name from the text box
function setCity() {
    localStorage.setItem("lastCity",document.getElementById("exampleDataList").value);
}


// Clickable buttons relevant to weather functions
searchButton.addEventListener("click",setCity);

