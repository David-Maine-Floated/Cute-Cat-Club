const apiKey = "SDVdR263Cz4mXx1lVGlUoA==uu0Usi2FFLAG9yWf"

const baseUrl = "https://api.api-ninjas.com//v1/cats?name="


// let name = "tabby";
    


export async function fetchKitty (name) {
    let customUrl = baseUrl + name
    let response = await fetch(customUrl, 
        { headers: { 
            'X-Api-Key': apiKey,
            "Content-Type": "application/json",
            "Accept": "application/json", 
            }
        });


    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    };

    const data = await response.json();
    console.log(data);
    return movies;
}




