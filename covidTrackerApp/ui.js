class VirusUI{
    constructor(){
        // set a property for country profile.
        // get element with given id.
        this.currentStatus = document.getElementById("country-profile");

    }
    CountryProfile(userData){
        // provide html template to element
        
        userData.forEach(e => {
            console.log(e.Date);
            let q = Math.round(new Date(e.Date).getTime()/1000);
        this.currentStatus.innerHTML = 
        `
        <div class="row">
            <div class="col col-md-12">
                <div class="card card-body text-center">
                    <h1>${e.Country}</h1><br>
                    <h2>Coronavirus Cases</h2>
                    <span class="d-block text-center text-secondary h3">${e.Confirmed}</span><br>
                    <h2>Total Deaths</h2>
                    <span class="d-block text-center h3 text-danger">${e.Deaths}</span><br>
                    <h2>Total Recoveries</h2>
                    <span class="d-block text-center h3 text-success">${e.Recovered}</span><br>
                    <h2>Active Cases</h2>
                    <span class="d-block text-center text-warning h3">${e.Active}</span><br>
                    <span class="text-center font-weight-normal">Last updated on ${new Date(q)}</span>
                </div>
            </div>
        </div>
        `

        })
        
      
    }
}



// const q = Math.round(new Date("2020-04-19T00:00:00Z").getTime()/1000);
// console.log(new Date(q))