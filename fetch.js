


// let name = "tabby";


    const baseURL = "https://api.api-ninjas.com//v1/cats?name=";
    const apiKey = "SDVdR263Cz4mXx1lVGlUoA==uu0Usi2FFLAG9yWf";

    const initialBreed = 'abyssinian'
    // if querey is empty, pull a breed from array
    const breeds = [];
    
    const fetchKitty = async (e) => {
        e.preventDefault()
     
        try {
            
            let customUrl = baseUrl + initialBreed
            let response = await fetch(temp, 
                { headers: { 
                    'X-Api-Key': apiKey,
                    "Content-Type": "application/json",
                    "Accept": "application/json", 
                }
            });

            if (response.ok) {
                let resBody = await response.json();
                console.log(resBody)

            } else {
                throw new Error(`API request failed with status ${response.status}: ${errorResponse.message}`);
            }
        } catch (err) {
            console.error(err);
        }
    }



export default fetchKitty;
