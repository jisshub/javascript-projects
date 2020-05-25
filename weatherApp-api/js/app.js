// dom manipulation
// get reference  to form
const form = document.querySelector("form");
const getCard = document.getElementById("card-1");

const updateUI = (allData) => {
    const getCity = allData.cityDetails.EnglishName;
    const weatherDt = allData.weatherDetails.Temperature.Imperial;
    const valueUnit = `${weatherDt.Value}${weatherDt.Unit}`
    getCard.querySelector('#cityId').textContent = getCity;
    getCard.querySelector('#weatherId').textContent = valueUnit;
}

const updateCity = async(city) => {
    // wait until v get the city object
    const cityDetails = await getCity(city);
    // wait unitl v get the weather object  
    const weatherDetails = await getWeather(cityDetails.Key);

    // return an object with properties as city details and weather details
    // return {
    //     cityDetails: cityDetails,
    //     weatherDetails: weatherDetails
    // };

    // using objectr shorthand 
    // when the property name and value are same - can use shorthand method.
    return {cityDetails, weatherDetails};
    
}
// get city input
form.addEventListener("submit", e => {
    // prevent default action
    e.preventDefault();
    // get the city 
    // location -> name of input field
    const city = form.location.value.trim()    
    form.reset();

    // update the city
    updateCity(city)
    .then(data => {
        // console.log(data);
        
        updateUI(data);
    })
    .catch(err => console.log(err));    
});


// data variable gets the object returned from updateCity()

