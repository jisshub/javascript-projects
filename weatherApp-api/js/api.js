// all api functionalities goes here

const apiKey = "taRlrWsDKekf0xBvxsfdNPcteGFQoDYK";

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
// invoke getCity()
getCity("delhi")
    .then(data => console.log(data))
    .catch(err => console.log(err.message));