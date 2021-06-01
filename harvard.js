var apiKey = harvardApiKey;
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const imageDiv = document.querySelector('#image-div');
const nextButton = document.querySelector('#nextButton');
const previousPage = document.querySelector('#previousButton');


// get ALL the objects 
// https://api.harvardartmuseums.org/object?apikey=apiKey
// https://api.harvardartmuseums.org/image?title=cat&apikey=APIKEY
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

//`https://api.harvardartmuseums.org/image?apikey=${key}&q=caption:${currentQueryValue}&page=${currentPage}`



// const currentQueryValue = "dog";
// this version of the url always only returned one record! should have known: 
// console.log(data.records.length); = 1 - I guess there was only one record in that call?
// const apiUrl = `https://api.harvardartmuseums.org/image?apikey=${apiKey}&q=caption:${currentQueryValue}`
// this version of the url is returning 10 (as it should, since total records per query = 10)
// !!... and when the currentQueryValue = "cat" the records.length = 372421
// !!... and when the currentQueryValue = "dog" the records.length = 372421
//....so..... it's not really reading my query value?
//if you search the json records- "dog" is nowhere to be found!


// if you do object instead of image, the queryvalue does show up in the title........
const apiUrl = `https://api.harvardartmuseums.org/image?title=${currentQueryValue}&apikey=${apiKey}&page=${currentPage}`;
var currentQueryValue;
var currentPage = 1;


searchButton.addEventListener('click', (event) => {
    currentQueryValue = searchInput.value;
    console.log(currentQueryValue);
 
    fetch(apiUrl)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            console.log(apiUrl);
            // Extract the info and records
            info = data['info'];
            records = data['records'];

            console.log("Data:", data);
            console.log("Info:", info);
            console.log("Records:", records);
            console.log("total records per query:", info.totalrecordsperquery);
            console.log("Total records:", data.info.totalrecords);

       
            data.records.forEach((record) => {

                var newImage = document.createElement('img');
                newImage.src = record.baseimageurl;
                var imageUrl = newImage.src;
                imageDiv.appendChild(newImage);
                console.log("Image url:", imageUrl);
                
        });
    })
    
});



//currently only returning 1 record, although "total records per query = 10"

//documentation
//https://api-toolkit.herokuapp.com/6
