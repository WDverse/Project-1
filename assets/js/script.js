var apiKey = 'fsq37w8dUN6194EZq28wvpwF7CQ3pCaNe8lPlAzGIEymFyw='


var requestUrl = "https://api.foursquare.com/v3/places/search?query=hotel&ll=43%2C-81";
fetch(requestUrl,{
    headers:{
        Accept: "application/json",
        Authorization: apiKey,
       'Access-Control-Allow-Origin': '*',
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (i=0; i<10; i++){
            console.log(data.results[i].name);
            console.log(data.results[i].location.address);
        }
        //console.log(data)
    })


// function getApi() {
   

// }
// searchButton.addEventListener("click", getApi);
