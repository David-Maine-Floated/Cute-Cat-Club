// import Chart from 'chart.js';

document.addEventListener("DOMContentLoaded", () => {
    


    const main = document.getElementById('main-container');
    const searchButton = document.querySelector('.search-breed');
    const searchBreedInput = document.querySelector('.input');
    const dropDownList = document.querySelector('.breed-select');
    const searchBreedButton = document.querySelector('.search-breed-button');
    
    
    
    //data population
    const kittyImage = document.querySelector('.main-img');
    const kittyName = document.querySelector('.kittyName');
    const greetingSpace = document.querySelector('.greeting');
    const otherAnimalsQuestion = document.querySelector('.other-animals.question');
    const otherAnimalsMessage = document.querySelector('.other-animals.message');
    const mainTitle = document.querySelector('.main-title');
    
    
    
    
    
    const baseUrl = "https://api.api-ninjas.com//v1";
    const searchUrl = "https://api.api-ninjas.com//v1/cats?name=";
    const apiKey = "SDVdR263Cz4mXx1lVGlUoA==uu0Usi2FFLAG9yWf";
    
    let colorScheme1 = ['rgba(255, 0, 244, 1)']


    //kitty data points

    let currentKitty;
    let friendliness = 0;
    let shedding = 0;
    let playfulness= 0;
    let greeting;
    let chart;
    // if (!chart) {
    //     makeChart();
    // }
    let treatOtherAnimalsMessage;
    let name;
    let treatOtherAnimalQuestion;
    let maxWeight;
    let minWeight;
    let maxLifeExpec;
    let minLifeExpec;
    let chart2;
    // if(!chart2) {
    //     makeChart2()
    // };



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
        console.log(treatOtherAnimalsScore);
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

        if (chart) {
            chart.destroy()
        }
        makeChart()
        if (chart2) {
            chart2.destroy()
        }
        makeChart2();
    }



    //event listneres

    searchBreedButton.addEventListener('click', fetchKitty);

    

    
    const validBreeds = ['Siamese cat', 'Maine Coon', 'British Shorthair', 'Ragdoll', 'American Shorthair', 'Abyssinian', 'Scottish Fold', 'Birman', 'Bombay', 'Siberian', 'Norwegian Forest', 'Russian Blue', 'American Curl', 'American Bobtail', 'Devon Rex', 'Balinese', 'Havana Brown', 'Himalayan', 'Turkish Angora', 'Manx', 'Japanese Bobtail', 'Ragamuffin', 'American Wirehair', 'Cornish Rex', 'Egyptian Mau', 'Somali', 'Selkirk Rex', 'Singapura', 'Korat', 'Ocicat', 'Tonkinese', 'Turkish Van', 'LaPerm', 'Chausie', 'Burmilla', 'Lykoi'];



    const names = ['Muffins', 'Cersei', 'Lil Nuggets', 'Cowboy', 'Mr. Toe Beans', 'Rocky', 'Snowball', 'Bernard', 'Whiskey', 'Fritz', 'Emilia', 'Big Nuggets', 'Thedra', 'Judy', 'Clementine', 'Ruth', 'Hudson', 'Sir Licks A Lot', 'Mrs. Hangry', 'Jerry Poppins', 'Camilla', 'Obama', 'Hermoine', 'Cole', 'Dr DooGiggle', 'Santy Clawz', 'Jawz', 'Bilbo', 'Dracula', 'Tinkerbell', 'Fluff 2.0']


    const greetings = ['Now Presenting: ', 'Please Welcome: ', 'The Prestigious: ', "We can't believe our eyes! It's really: ", 'Nice to see you again: ', 'Most Excite to introduce: ', 'Such raw beauty, hello: ', 'The Elegant: ', 'Welcome back to the club: '];


    const otherAnimals = ['"I will love and cuddle them foreverrrr."' ,'"I\'d really enjoy a sibling."',' "I could go either way if I\'m being honest."' , '"If they leave me and my food alone, i\'ll leave them and their food alone"']


    const otherAnimals5Rating = ['"I will destroy. I will consume. There will be nothing left."', '"I will wreak utter destruction on any fool who crosses my path."', '"I will stalk them. I will wait till their alone. I will eat them."', '"These Fangs, these claws...they are here for a reason. Bring me an animal and I will educate you.']

    const otherAnimalsTitleEndings = ['! Do you dig other animals?', '! The fans want to know...do you like other animals?', '! How do you feel about other animal friends?', "! We're a little scared to ask but...do you allow other animals in your life?", '! The fans have to know! Are interetsed in other animals? Or are you a solo kind of cat?' ]

    const otherAnimalsTitleOpenings = ['Hey ', 'Hi ', 'Question for you ', 'If we could have your attention ', 'Well hello ', 'Hi there ', 'Howdy ', 'Bonjour ']

    function randomName() {
        let length = names.length - 1;
        let i = Math.floor(Math.random() * length)
        return names[i];
    }

    function createGreeting() {
        let length = greetings.length - 1;
        let i = Math.floor(Math.random() * length)
        greeting = greetings[i]
        return greeting + name;
    }

    function createOtherAnimalsQuestion() {
        let length1 = otherAnimalsTitleOpenings.length - 1;
        let i1 = Math.floor(Math.random() * length1)
        let opening = otherAnimalsTitleOpenings[i1]

        let length2 = otherAnimalsTitleEndings.length - 1;
        let i2 = Math.floor(Math.random() * length2)
        let ending = otherAnimalsTitleEndings[i2]

        return opening + name + ending;
    }



    function generateOtherAnimalsLvl5RatingMessage() {
        let length = otherAnimals5Rating.length - 1;
        let i = Math.floor(Math.random() * length)
        return otherAnimals5Rating[i]
    }


    
    validBreeds.forEach(breed => {
        let op = document.createElement('option');
        op.value = breed;
        op.innerHTML = breed;
        dropDownList.appendChild(op);

    });



  
 


    function makeChart() {

        let colorScheme = colorScheme1;
    
        const ctx = document.getElementById('firstChart');
        let chartData = [friendliness, shedding, playfulness]
        
        Chart.defaults.font.size = 14;
        Chart.defaults.font_weight = 100;
        Chart.defaults.font.family = 'Orbitron';
        Chart.defaults.plugins.legend = false;
        Chart.defaults.color = colorScheme[0];
        
        

        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Friendliness', 'Shedding', 'Playfulness'],
                datasets: [{
                    label: 'kitty stats',
                    data: chartData,
                    borderWidth: 1,
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,  
                        grid: {
                            display: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                legend: {
                    labels: {
                        textShadow: '-.5px 0 black, 0 .5px black, .5px 0 black, 0 -.5px black'
                    },
                },
            },
        });
    }

    
    function makeChart2() {
        console.log('hello')
        let colorScheme = colorScheme1;
    
        const ctx = document.getElementById('secondChart');
        let chartData = [minWeight, maxWeight, minLifeExpec, maxLifeExpec];
        
        Chart.defaults.font.size = 14;
        Chart.defaults.font.family = 'Orbitron';
        Chart.defaults.plugins.legend = false;
        Chart.defaults.color = 'rgba(255, 36, 187, 1)';
        
        

        chart2 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Min Weight', 'Max Weight', 'Min Life Expectency', 'Max Life Expectency'],
                datasets: [{
                    label: 'kitty stats',
                    data: chartData,
                    borderWidth: 1,
                    backgroundColor: 'rgba(39, 236, 230, 0.65)'
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true, 
                        grid: {
                            display: false
                        } 
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                legend: {
                    labels: {
                        textShadow: '-.5px 0 black, 0 .5px black, .5px 0 black, 0 -.5px black'
                    },
                },
            },
        });
    }









        



    const fontColors = ["blue", "yellow", 'rgba(245, 40, 145, 0.8)', 'rgba(39, 236, 245, 1)', 'rgba(39, 138, 245, 1)', 'rgba(61, 39, 245, 1)', 'rgba(132, 255, 36, 1)', 'rgba(150, 36, 255, 1)', 'rgba(219, 36, 255, 1)', 'rgba(255, 36, 100, 1)', 'rgba(55, 36, 255, 1)', 'white', 'skyblue', 'rgba(255, 36, 36, 1)', 'rgba(255, 105, 36, 1)', 'rgba(36, 255, 228, 1)', 'rgba(255, 219, 36, 1)', 'rgba(214, 255, 36, 1)']







    let currentColor = 0
    function changeColor() {
        console.log('hihi')
        currentColor++;
        if(currentColor >= fontColors.length) {
            currentColor = 0
        };

        mainTitle.style.color = fontColors[currentColor]
    
    };

    setInterval(changeColor, 500)




























});



