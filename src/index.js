

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById('main-container');
    const searchButton = document.querySelector('.search-breed');
    const searchBreedInput = document.querySelector('.input');
    const dropDownList = document.querySelector('.breed-select');
    const searchBreedButton = document.querySelector('.search-breed-button');
    const kittyImage = document.querySelector('.main-img');




    const baseUrl = "https://api.api-ninjas.com//v1";
    const searchUrl = "https://api.api-ninjas.com//v1/cats?name=";
    const apiKey = "SDVdR263Cz4mXx1lVGlUoA==uu0Usi2FFLAG9yWf";
    

    let currentKitty;



    const fetchKitty = async (e) => {
        e.preventDefault();


        let breed = dropDownList.value;

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
                currentKitty = resBody;
                console.log(resBody);

            } else {
                throw new Error(`API request failed with status ${response.status}: ${response.message}`);
            }
        } catch (err) {
            console.error(err);
        }

        populateData();
    };

   
    function populateData() {
        console.log(currentKitty[0].image_link);
        kittyImage.src = currentKitty[0].image_link;
    }



    //event listneres

    searchBreedButton.addEventListener('click', fetchKitty);

    

    
    const validBreeds = ['Siamese cat', 'Maine Coon', 'British Shorthair', 'Ragdoll', 'American Shorthair', 'Abyssinian', 'Scottish Fold', 'Birman', 'Bombay', 'Siberian', 'Norwegian Forest', 'Russian Blue', 'American Curl', 'American Bobtail', 'Devon Rex', 'Balinese'];

    
    validBreeds.forEach(breed => {
        let op = document.createElement('option');
        op.value = breed;
        op.innerHTML = breed;
        dropDownList.appendChild(op);

    });













});



