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


// const currentQueryValue = searchInput.value;
const currentQueryValue = "cat";
const apiUrl = `https://api.harvardartmuseums.org/image?apikey=${apiKey}&q=caption:${currentQueryValue}`


searchButton.addEventListener('click', (event) => {
  
 
    fetch(apiUrl)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
           
            // Extract the info and records
            info = data['info'];
            records = data['records'];

            console.log("Data:", data);
            console.log("Info:", info);
            console.log("Records:", records);
            console.log("total records per query:", info.totalrecordsperquery);
            console.log("Total records:", data.info.totalrecords);
            // console.log(data.records.length);    = 1
       
            data.records.forEach((record) => {

                var newImage = document.createElement('img');
                newImage.src = record.baseimageurl;
                var imageUrl = newImage.src;
                imageDiv.appendChild(newImage);
                console.log("Image url:", imageUrl);
                

                console.log(searchInput.value);
                console.log(typeof(searchInput.value));

        });
    })
    
});

//currently only returning 1 record, although "total records per query = 10"

//documentation
//https://api-toolkit.herokuapp.com/6
