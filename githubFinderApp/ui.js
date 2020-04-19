class PageUI{
    constructor(){
        // set profile property to div element with id as profile.
        this.profile = document.getElementById("profile");
        this.container = document.querySelector(".searchContainer");
    }
    
    showProfile(user){
        this.profile.innerHTML = 
        `
        <div class= "card card-body">
            <div class="row">
                <div class="col col-md-3">
                    <img class="img-fluid mb-2"
                    src="${user.avatar_url}">
                    <a href= "${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">Profile View</a>
                </div>
                <br><br>
                <div class="col col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gist}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span> 
                    <span class="badge badge-success">Followings: ${user.following}</span> 
                    <br><br>
                    <ul class=list-group> 
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Blogs: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Created At: ${user.created_at}</li>

                     </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3 mt-3">Latest Repos<h3>
        <div id="repos">


        </div>
        `

    }
    // clear profile
    clearProfile(){
        this.profile.innerHTML = "";
    }

    // showAlerts 
    showAlerts(msg, alertClasses){
        // call deleteAlerts() method before adding any new alert
        this.deleteAlerts();
        // create a div element
        const addAlerts = document.createElement("div");
        // add text contents
        addAlerts.textContent = msg;
        // add classes
        addAlerts.classList = alertClasses;
        // insert the div element as firstchild
        this.container.insertBefore(addAlerts, this.container.childNodes[0]);

    }

    // delete alerts
    deleteAlerts(){
        // get elemet with alert class
        const findAlerts = document.querySelector(".alert")
        // check if any alerts are there
        if (findAlerts){
        // if yes, remove that element            
            findAlerts.remove(); 
        }
    }

    // show repos
    showRepos(repos){
        // initialize a variable
        let output = "";
        repos.forEach(eachRepo => {
            output += 
            `
                <div class= "card card-body mb-3">
                    <div class="row">
                        <div class="col col-md-6">
                            <a href="${eachRepo.html_url}" target= "_blank">${eachRepo.name}</a>
                        </div>
                        <div class="col col-md-6">
                            <span class="badge badge-primary">Stars: ${eachRepo.stargazers_count}</span>
                            <span class="badge badge-success">Watchers: ${eachRepo.watchers_count}</span>
                            <span class="badge badge-secondary">Forks: ${eachRepo.forks}</span>
                        </div>
                    </div>
                </div>
            `

        });
        // output this on page, get div elemt repos as id which is specified in this.profile.innerHTML()
        // of showProfile().
        document.getElementById("repos").innerHTML = output;
    }

}