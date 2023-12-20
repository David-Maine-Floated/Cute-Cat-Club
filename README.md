# Cute-Cat-Club

## View website: https://david-maine-floated.github.io/Cute-Cat-Club/

## Description


#### Cute Cat Club is a visualizer of different cat breeds and interesting data about each one. The user will be presented a page to search their favorite breeds. The page will dispaly the requested data for the specific breed in a fun styalized way. There are interactive elements of the page, allowing users to customize and style their Cute Cat Club experience. Every day is a party...but mostly a nap...at the Cute Cat Club.



## Technical Details:
#### The Cute Cat Club is coded entirely in Vanilla JavaScript. It uses JS Chart for the graphs. The name generation,the verbage explaining the different data points, and the interactive colors and other style elements is all provided by manipulating DOM ojbects via JavaScript. The Data is provided by having the user select a breed and click the 'find breed!' which will fetch the appropriate data and populate the page with the data visualization. 

## Functionality implementation:
#### The majority of the functionality is all triggered through selecting a breed and clicking the search button. Upon clicking the button the fetch request function is triggered. This handles fetching the data, and after data is fetched it also calls the 'populate data' funciton. 

```
    const fetchKitty = async (e) => {
        e.preventDefault();

        let breed = dropDownList.value;

        try {
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

            } else {
                throw new Error(`API request failed with status ${response.status}: ${response.message}`);
            }
        } catch (err) {
            console.error(err);
        }

        populateData();
    };


```



![Alt Text](./Homepage.png)
