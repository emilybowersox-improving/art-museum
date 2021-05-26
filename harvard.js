console.log("loaded");


// get ALL the objects 
// https://api.harvardartmuseums.org/object?apikey=apiKey
//Harvard example
// Find all of the objects that are paintings and have the word "rabbit" in the title

// var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
// var queryString = $.param({
//     apikey: "apiKey",
//     title: "rabbit",
//     classification: "Paintings"
// });

// $.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
//    console.log(data); 
// });

var apikey = harvardApiKey;
var harvardUrl = 'https://api.harvardartmuseums.org/object?apikey=' + apikey


function displayRabbit() {

    fetch(harvardUrl)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            console.log(data);

            // const currentFox = document.querySelector('#first-pic');
            // currentFox.src = data.image[0];
        })

}

displayRabbit();