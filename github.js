/*
Client ID
85b51f6bd03b66379f11
Client Secret
595a29324609f3b95390cbec7fb3679799db321d
*/
class GitHub{
    constructor(){
    this.client_id = '85b51f6bd03b66379f11';
    this.client_secret = '595a29324609f3b95390cbec7fb3679799db321d';
    this.number_of_repos = 5;
    this.sort_repos = 'created : asc'
    }
    
    async getUser(user){
        
        //get user profiles from api
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        
        //get user repos from api
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.number_of_repos}&sort=${this.sort_repos}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoData = await repoResponse.json();
        
        return{
            profile : profileData,
            repos : repoData
        };
    }
}