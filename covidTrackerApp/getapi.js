class Covid{
    constructor(){}
    async getUserValue(country){
        const apiData = await fetch(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-04-18T13:13:30Z`);
        const getJson = await apiData.json();
        return {
            getJson
        }
    }
}