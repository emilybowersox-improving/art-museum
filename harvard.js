var apiKey = harvardApiKey;
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const imageDiv = document.querySelector('#image-div');

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


const currentQueryValue = "dog";
const apiUrl = `https://api.harvardartmuseums.org/image?apikey=${apiKey}&q=caption:${currentQueryValue}`


searchButton.addEventListener('click', (event) => {
  
 
    fetch(apiUrl)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            
                // for (let i = 0; i < data.records.length; i++) {
           
            // Extract the info and records
            info = data['info'];
            records = data['records'];

            console.log("Data:", data);
            console.log("Info:", info);
            console.log("Records:", records);
       
            for (let i = 0; i < 10; i++) {

                var record = data.records[i];


                var newImage = document.createElement('img');
                // newImage.src = data.records[i].baseimageurl;
                var imageUrl = newImage.src;
                imageDiv.appendChild(newImage);
                console.log("Image url:", imageUrl);
                //when i console log image url- i have 10...



            // for (let i = 0; i < data.records.length; i++) {
            //     let record = data.records[i];
            // // }

            // console.log(firstRecord.src);
        }
    })
    
});



//documentation
//https://api-toolkit.herokuapp.com/6

//url + resource + ?api
// andtitle = 
// wildcard is built into api 
