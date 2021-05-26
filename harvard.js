console.log("loaded");

var apiKey = harvardApiKey;

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


var baseUrl = "https://api.harvardartmuseums.org/object?title=";
var searchTerm = "rabbit";
var apiKeyEnding = "&apikey=" + apiKey;
var finalUrl = baseUrl + searchTerm + apiKeyEnding;

//https://api.harvardartmuseums.org/medium?title=cat&apikey=APIKEY

var harvardUrl = 'https://api.harvardartmuseums.org/object?apikey=' + apiKey
var myUrl = 'https://api.harvardartmuseums.org/medium?apikey=' + apiKey


function displayRabbit() {

    fetch(finalUrl)
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


//documentation
//https://api-toolkit.herokuapp.com/6

//url + resource + ?api
// andtitle = 
// wildcard is built into api 

//Resource list 
// Object
// Person
// Exhibition
// Publication
// Gallery
// Spectrum
// Classification
// Century
// Color
// Culture
// Group
// Medium
// Period
// Place
// Technique
// Worktype
// Activity
// Site
// Video
// Image
// Audio
// Annotation