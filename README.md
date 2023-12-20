# Cute-Cat-Club

## View website: https://david-maine-floated.github.io/Cute-Cat-Club/

## Description


#### Cute Cat Club is a visualizer of different cat breeds and interesting data about each one. The user will be presented a page to search their favorite breeds. The page will dispaly the requested data for the specific breed in a fun styalized way. There are interactive elements of the page, allowing users to customize and style their Cute Cat Club experience. Every day is a party...but mostly a nap...at the Cute Cat Club.



## Technical Details:
#### The Cute Cat Club is coded entirely in Vanilla JavaScript. It uses JS Chart for the graphs. The name generation,the verbage explaining the different data points, and the interactive colors and other style elements is all provided by manipulating DOM ojbects via JavaScript. The Data is provided by having the user select a breed and click the 'find breed!' which with one single click will fetch the appropriate data and populate the page with the data visualization. 

## Functionality implementation:

#### The majority of the functionality is all triggered through selecting a breed and clicking the search button. Upon clicking the button the fetch request function is triggered. This handles fetching the data, and after data is fetched it also calls the 'populateData' funciton. 

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
#### The populateData function handles all of the DOM manipulation related to presenting the Data specific to the Cat Breed. The question and answer sections pull random questions from a question bank I created. Based on the data points the responses are conditionally pulled from the appropriate bin of answers I created. I created several helper methods to help with the pulling of questions and responses from their respective banks, pullilng a randomly selected name, and creating complete scentences incorportating merging the name with the questions and responses. Finally, at the end of this function the charts are destroyed and then re-created with the new data.

```
function populateData() {
        name = randomName();
        let currentKittyData = currentKitty[0];
        kittyImage.src = currentKittyData.image_link;
        kittyName.innerHTML = currentKittyData.name;
        friendliness = currentKittyData.family_friendly;
        playfulness = currentKittyData.playfulness;
        shedding = currentKittyData.shedding;
        greeting = createGreeting();
        greetingSpace.innerHTML = greeting;

        treatOtherAnimalsScore = currentKittyData.other_pets_friendly;
        if(treatOtherAnimalsScore <= 4) {
            treatOtherAnimalsMessage = otherAnimals[treatOtherAnimalsScore - 1];
        } else {
            treatOtherAnimalsMessage = generateOtherAnimalsLvl5RatingMessage();
        };

        treatOtherAnimalQuestion = createOtherAnimalsQuestion();
        otherAnimalsQuestion.innerHTML = treatOtherAnimalQuestion;
        otherAnimalsMessage.innerHTML = treatOtherAnimalsMessage


        minWeight = currentKittyData.min_weight;
        maxWeight = currentKittyData.max_weight;
        minLifeExpec = currentKittyData.min_life_expectancy;
        maxLifeExpec = currentKittyData.max_life_expectancy;
        childrenFriendly = currentKittyData.children_friendly;
        childFriendlyQuestion.innerHTML = randomChildFriendlyQuestion();

        if(childrenFriendly === 5) {
            childFriendlyResponse.innerHTML =  generateChildrenFriendlyLvl5Response()
        } else if (childrenFriendly === 4) {
            childFriendlyResponse.innerHTML = generateChildrenFriendlyLvl4Response()
        }
         else {
            childFriendlyResponse.innerHTML = childFriendlyResponses[childrenFriendly - 1];
        }

        if (chart) {
            chart.destroy()
        }
        makeChart()
        if (chart2) {
            chart2.destroy()
        }
        makeChart2();
    }
```


#### The interactive styling elements, of changing colors and positions upon mouse hovering were all done with Vanilla SCSS + JavaScript. The page is responsive to re-sizing the screen, however it is not yet been optimized for mobile screens. A very simple function was written to have the logo color change every half second: 

```
    let currentColor = 0
    function changeColor() {
        currentColor++;
        if(currentColor >= fontColors.length) {
            currentColor = 0
        };

        mainTitle.style.color = fontColors[currentColor]
    
    };

    setInterval(changeColor, 500)
```

![Alt Text](./Homepage.png)
