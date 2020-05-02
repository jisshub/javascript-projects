// instantiate Covd class
const apiObj = new Covid
// instantiate ui class
const ui = new VirusUI

// get input field
const getNation = document.getElementById("nation");
// add a key up event on input
getNation.addEventListener("keyup", (e) => {
    text = e.target.value;
    if (text) {
        // apiObj.getUservalue() -- is a promise so use then() to get data
        apiObj.getUserValue(text)
            .then(data => {
                // if no data exist, here length is array property
                if (data.lastData.length === 0) {
                    // clear current profile
                    ui.clearAllProfiles();
                    // show alerts
                    ui.showAlerts("no country exists may be wrong input", "alert alert-danger");
                } else {
                    // show profile
                    ui.CountryProfile(data.lastData);
                    // call deleteAlertsFrist() method to delete alert box
                    ui.deleteAlertsFrist();
                }
            })
        // if no input,
    } else {
         // call deleteAlertsFrist() method to delete alert box
         ui.deleteAlertsFrist();
        // clear current profile
        ui.clearAllProfiles();
       

    }
});