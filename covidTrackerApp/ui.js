class VirusUI{
    constructor(){
        // set a property for country profile.
        // get element with given id.
        this.currentStatus = document.getElementById("country-profile");

    }
    CountryProfile(userData){
        // provide html template to element
        
        userData.forEach(e => {
        this.currentStatus.innerHTML = 
        `
        <div class="row">
            <div class="col col-md-6">
                <h2>${e.Country}</h2><br><br>
                <div class="info">
                </div>
            </div>
        </div>
        `

        })
        
      
    }
}