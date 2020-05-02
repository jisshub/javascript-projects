// make an https call to github, use es6 class
class Github{
     constructor(){
        //  set two properties
         this.client_id = "6d152b3b20379347b792";
         this.client_secret = "0f6c7eaeef6c1433e273831f0e229e65eea5630b";
         this.repos_count = 5;
        //  sort the repos in acsending manner, so latest comes first
         this.repos_sort = "created: asc";
     }
    //  function to fetch userprofile ad userrepo
    async getUser(user){
        // get githubuser profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        // get github user repos
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?
                                            per_page=${this.repos_count}&sort=${this.repos_sort}&
                                            client_id=${this.client_id}&client_secret=${this.client_secret}`)
        // get profile data ie. json data
        const profile = await profileResponse.json();

        // get respos dat ie. json data
        const repos = await reposResponse.json();
        // return profile and repos object as objects
        return {
            profile, 
            repos
        }
    }
}

