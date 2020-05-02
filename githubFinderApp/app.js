// instantiate github obj
const githubObj = new Github;

// instantiate pageUI class
const uiObj = new PageUI;

const getInpText = document.getElementById("searchUser");
getInpText.addEventListener("keyup", (e) => {
    // get text value 
    const textVal = e.target.value;

    // ensure it is not blank
    if(textVal){
        // make an http call to Github class in github.js file
        // here githubOb.getUser(textval) - returns promise
        githubObj.getUser(textVal)
        .then(data => {
            // if no user found, access profile.message property
            if(data.profile.message === "Not Found"){
                // alert message
                uiObj.showAlerts("no user found", "alert alert-danger");
                // clear userprofile that found once.
                uiObj.clearProfile();

            }
            else{
                // clear alerts, if user found
                uiObj.deleteAlerts();
                // show profile, call showProfile - pass data.profile as argument.
                uiObj.showProfile(data.profile);
                // show repos, call showRepos 
                uiObj.showRepos(data.repos);
            }
        })
    }
    // if not input given,
    else{
        // clear all profiles - invoke clearProfile on ui object.
        uiObj.clearProfile();
    }


})
