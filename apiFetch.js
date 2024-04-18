function apiFetch(apiUrl){
    //calls the api with the URL and THEN handles the response by converting the data into json format
    fetch(apiUrl).then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json
    }).then(data =>{
        // THEN outputs the json data
        console.log('Data from the API: ' + data);
    }).catch(error =>{
        // CATCHES any errors
        console.log("Error fetching data: " + error);
    })
}

apiFetch('https://cat-fact.herokuapp.com');