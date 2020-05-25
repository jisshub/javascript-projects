// all api functionalities goes here

const apiKey = "zvKA4G7xVFzeZePo6vfNfF183Bp1LWGZ";

// get weather information
const getWeather = async(locId) => {
    const resourceUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    // fetch the resource 
    const response = await fetch(`${resourceUrl}${locId}?apikey=${apiKey}`);

    if (response.status !== 200) {
        throw new Error("cant fetch the data")
    } else {
        const weatherData = await response.json();
        // get first weather object
        return weatherData[0];
    }
}

// get city information
const getCity = async(city) => {
    const resourceUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    // fetch the city
    const response = await fetch(`${resourceUrl}?apikey=${apiKey}&q=${city}`);

    if (response.status !== 200) {
        throw new Error("Cant fetch the data");
    } else {
        const cityData = await response.json();
        // return first object
        return cityData[0];
    }
};
