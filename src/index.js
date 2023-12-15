

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById('main-container');
    const searchButton = document.querySelector('.search-breed');
    const searchBreedInput = document.querySelector('.input');


    const baseUrl = "https://api.api-ninjas.com//v1";
    const searchUrl = "https://api.api-ninjas.com//v1/cats?name=";
    const apiKey = "SDVdR263Cz4mXx1lVGlUoA==uu0Usi2FFLAG9yWf";
    
    const initialBreed = 'abyssinian';
    // if querey is empty, pull a breed from array
    const breeds = [];

    let breed = '';
    

    const breedName = () => {
        let breed = searchBreedInput.value;
        console.log(breed);
    };


    const fetchKitty = async (e) => {
        e.preventDefault();
        // e.stopPropagation();
  
        let customUrl = baseUrl + initialBreed;
        let breed = searchBreedInput.value;
        console.log(breed); 
        try {
            
            const apiKey = "SDVdR263Cz4mXx1lVGlUoA==uu0Usi2FFLAG9yWf";
            const baseUrl = "https://api.api-ninjas.com/v1/cats?name=";  
   
            let response = await fetch(baseUrl + breed, 
                { 
                    method: 'GET',
                    headers: { 
                        'X-Api-Key': apiKey,
                        "Content-Type": "application/json",
                    },
                });

            if (response.ok) {
                let resBody = await response.json();
                console.log(resBody);

            } else {
                throw new Error(`API request failed with status ${response.status}: ${response.message}`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchAll = async () => {
        try {
            
            const apiKey = "SDVdR263Cz4mXx1lVGlUoA==uu0Usi2FFLAG9yWf";
    
   
            let response = await fetch(searchUrl + 'abyssinian' , 
                { 
                    method: 'GET',
                    headers: { 
                        'X-Api-Key': apiKey,
                        "Content-Type": "application/json",
                    },
                });

            if (response.ok) {
                let resBody = await response.json();
                console.log(resBody);

            } else {
                throw new Error(`API request failed with status ${response.status}: ${response.message}`);
            }
        } catch (err) {
            console.error(err);
        }


    };

    const handleSubmit = (e) => {
        breed = e.target.value;
        console.log(breed);    
    };

    //event listneres

    //should I connect these somehow?
    searchButton.addEventListener('click', fetchKitty);
    searchBreedInput.addEventListener('change', handleSubmit);


});