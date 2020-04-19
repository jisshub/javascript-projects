export class Github{
    constructor(){
        this.client_id ="4cbf3ffa9d30ca379ea2";
        this.client_secret = "a7c7119d9077d7e595d87d02faf6e1a4b8b33b1c";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }
    // to fetch user profile and user repo.
    async getUser(userValue){
        const userProfile = await fetch(`https://api.github.com/${userValue}?
                            client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // get github user repo
        const userRepos = await fetch(`https://api.github.com/${userValue}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        // get profile data 
        const profile = await userProfile.json();

        const repos = await userRepos.json();

        return{
            profile,
            repos
        }
        
    }
}