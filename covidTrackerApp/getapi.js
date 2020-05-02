class Covid{
    constructor(){}
    async getUserValue(country){
        // fetch api to get response object
        const apiData = await fetch(`https://api.covid19api.com/live/country/${country}`);
        // wait to get json array from response, so use json method,
        const getJson = await apiData.json();
        // get last object from json Arrya
        const lastData = getJson.slice(-1);
        // return the last data as object. else we cant apply property on lastData
        return {lastData};
    }
}