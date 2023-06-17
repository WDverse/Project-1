var inputEl = document.getElementById("exampleDataList");
var city = inputEl.value;
console.log("city name:" + city);

function getHotel(lat) {

    var apiKey = 'fsq37w8dUN6194EZq28wvpwF7CQ3pCaNe8lPlAzGIEymFyw='
    var hotelEl = document.getElementById("hotels");

    var requestUrl = "https://api.foursquare.com/v3/places/search?query=hotel&ll=" + lat;
    fetch(requestUrl, {
        headers: {
            Accept: "application/json",
            Authorization: apiKey,
            'Access-Control-Allow-Origin': '*',
        }
    })
        // Get the the hotel names and addresses for the searched city and display on webpage
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (i = 0; i < 10; i++) {
                console.log(data.results[i].name);
                console.log(data.results[i].location.address);
                var hotelsDiv = document.createElement("div");
                hotelsDiv.classList.add("hotels-div");
                var hotelInfoEl = document.createElement("ul");
                hotelInfoEl.classList.add("hotel-info");
                var hotelName = document.createElement("li");
                var addressText = document.createElement("li");
                addressText.classList.add("address-text");
                var hotelAddress = document.createElement("li");
                hotelAddress.classList.add("hotel-address");
                hotelName.textContent = data.results[i].name;
                addressText.textContent = "Address:";
                hotelAddress.textContent = data.results[i].location.address;
                if (data.results[i].location.address == undefined) {
                    addressText.style.display = "none";
                    hotelAddress.textContent = "Sorry! Address not found";
                }
                hotelInfoEl.appendChild(hotelName);
                hotelInfoEl.appendChild(addressText);
                hotelInfoEl.appendChild(hotelAddress);
                hotelsDiv.appendChild(hotelInfoEl);
                hotelEl.appendChild(hotelsDiv);
            }
            function hotelHead() {
                var hotelHeader = document.getElementById("hotel-header");
                hotelEl.appendChild(hotelHeader);
                hotelHeader.classList.add("hotel-header");
                hotelHeader.textContent = "Check out these hotels in" + city + ":";
            }
            hotelHead();
        })

}

