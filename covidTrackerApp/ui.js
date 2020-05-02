class VirusUI{
    constructor(){
        // set a property for country profile.
        // get element with given id.
        this.currentStatus = document.getElementById("country-profile");
        this.containerEl = document.getElementById("searchContainer");

    }
    CountryProfile(userData){
        // provide html template to element
        
        userData.forEach(e => {
            const q = new Date(e.Date);
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
                    <span class="text-center font-weight-normal">Last updated on ${q.toLocaleString()}</span>
                </div>
            </div>
        </div>
        `})
    }
    showAlerts(message, alertStyles){
        // call deleteAerts()
        this.deleteAlertsFrist();
        // create a div element
        const crDiv = document.createElement("div");
        // add message 
        crDiv.textContent = message;
        // add classes
        crDiv.classList = alertStyles;
        // find element before we want to insert the alert box
        const getCard = document.getElementById("search")
        // use insertBefore(newnode, referencenode) to insert new node before reference node
        this.containerEl.insertBefore(crDiv, getCard);
    }
    deleteAlertsFrist(){
        // find element woth alert class
        const alertBox = document.querySelector(".alert");
        if (alertBox) {
            // remove that element
            alertBox.remove();
        }
    }
    clearAllProfiles(){
        this.currentStatus.innerHTML = "";
    }
    
    
}



// const q = Math.round(new Date("2020-04-19T00:00:00Z").getTime()/1000);
// console.log(new Date(q))