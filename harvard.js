var apiKey = harvardApiKey;
const searchButton = document.querySelector('#search-button');
const imageDiv = document.querySelector('#image-div');

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



searchButton.addEventListener('click', (event) => {
  
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


            // For (let i = 0, i < data.records.length, i++) {
            //     Let record = data.records[i];

                const newImage = document.createElement('img');
                newImage.src = data.records[0].baseimageurl;
                const imageUrl = newImage.src;
                imageDiv.appendChild(newImage);
                console.log(imageUrl);


            // }

            // for (let i = 0; i < data.records.length; i++) {
            //     let record = data.records[i];
            // // }

            // console.log(firstRecord.src);
        })
});



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