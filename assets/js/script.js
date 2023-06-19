function getHotel(lat) {
    var apiKey = "fsq37w8dUN6194EZq28wvpwF7CQ3pCaNe8lPlAzGIEymFyw=";
    var hotelEl = document.getElementById("hotel");
  
    // Clear previous search results
    hotelEl.innerHTML = "";
  
    var requestUrl =
      "https://api.foursquare.com/v3/places/search?query=hotel&ll=" + lat;
    fetch(requestUrl, {
      headers: {
        Accept: "application/json",
        Authorization: apiKey,
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (i = 0; i < 10; i++) {
          
          // Created a div to append the following bootstrap class 
          var rowDiv = document.createElement("div");
          rowDiv.className =
            "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative hotel-details";
  
            // Created a div to append the following bootstrap class 
          var imageDiv = document.createElement("div");
          imageDiv.className = "col-auto p-3";
  
          // Created a img tag to append the following hotel icon image 
          var imageCard = document.createElement("img");
          imageCard.src = "./assets/images/hotel.png";
          imageCard.alt = "Placeholder Image";
          imageCard.width = "100";
  
          // Append the image tag to imageDiv
          imageDiv.appendChild(imageCard);
  
  
          // Created a div to append the following bootstrap class 
          var hotelInfoDiv = document.createElement("div");
          hotelInfoDiv.className = "col p-4 d-flex flex-column position-static";
  
          var hotelName = document.createElement("h3");
          // Adding this 'mb-2' class for margin-bottom
          hotelName.className = "mb-2";
  
          hotelName.textContent = data.results[i].name;
  
          // Adding this 'p' tag to append the hotel address
          var hotelAddress = document.createElement("p");
          hotelAddress.className = "card-text mb-auto";
          hotelAddress.textContent = data.results[i].location.formatted_address;
  
          hotelInfoDiv.appendChild(hotelName);
          hotelInfoDiv.appendChild(hotelAddress);
  
          rowDiv.appendChild(imageDiv);
          rowDiv.appendChild(hotelInfoDiv);
  
          hotelEl.appendChild(rowDiv);
        }
      });
  }
  