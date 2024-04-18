// axios is compatible with all browsers, data is automatically parsed in to json format with response.data,  and axios handles errors better rejecting the promise if an error occurs automatically caught by catch



function apiAxios(apiUrl){    
    // Make a GET request to the API using Axios
    axios.get(apiUrl)
        .then(response => {
            // Handle successful response
            console.log('Data from the API:', response.data);
            // You can do further processing here, such as updating the UI
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
        });
}

apiAxios('https://api.example.com/data');