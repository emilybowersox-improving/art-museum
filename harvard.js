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


var baseUrl = "https://api.harvardartmuseums.org/image?title=";
var searchTerm = "rabbit";
var apiKeyEnding = "&apikey=" + apiKey;
var finalUrl = baseUrl + searchTerm + apiKeyEnding;

//https://api.harvardartmuseums.org/image?title=cat&apikey=APIKEY

var harvardUrl = 'https://api.harvardartmuseums.org/image?apikey=' + apiKey
var myUrl = 'https://api.harvardartmuseums.org/iamge?apikey=' + apiKey


function displayPic() {

    fetch(finalUrl)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            console.log(data);

            // Extract the info and records
            info = data['info'];
            records = data['records'];

            console.log(records[0]);

            const currentPic = document.querySelector('#first-pic');
            const firstRecord = document.querySelector('#first-record');
            
            firstRecord.src = data.records[0].baseimageurl;
            currentPic.src = data.records[0].baseimageurl;

            console.log(firstRecord.src);
        })

}

displayPic();


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