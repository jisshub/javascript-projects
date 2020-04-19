import { Github } from "./github";
import { PageUI } from "./ui";
const user1 = new Github();
const uiObj = new PageUI();

const getInpText = document.getElementById("userName");
getInpText.addEventListener("keyup",(e)=>{
    const userValue = e.target.value;
    if(userValue){
        user1.getUser(userValue)
        .then(data => {
            if(data.profile.message !== 'Not Found'){
                // show alerts
                uiObj.showProfile(data.profile);
                
            }
            
        })
    }
}) 
