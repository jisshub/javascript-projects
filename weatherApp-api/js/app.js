// dom manipulation


// get reference  to form
const form = document.querySelector("form");

const updateCity = async(city) => {
    // wait until v get the city object
    const cityDetails = await getCity(city);
    // wait unitl v get the weather object
    const weatherDetails = await getWeather(cityDetails.Key);
    console.log(weatherDetails);
        
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
    updateCity(city);
});


