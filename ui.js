class UI{
    constructor(){
        this.profile = document.getElementById('profile');
        this.repos = document.getElementById('repos');
    }

    showUser(user){
        this.profile.innerHTML = `
        <div class='card card-body'>
            <div class='row'>
                <div class='col-md-3'>
                    <img class='img-fluid mb-2' src=${user.avatar_url}>
                    <a href=${user.html_url} class='btn btn-primary btn-block mb-4'>View Profile</a>
                </div>
                <div class='col-md-9'>
                    <span class='badge badge-primary'> Public Repos : ${user.public_repos}</span>
                    <span class='badge badge-secondary'> Public Gists : ${user.public_gists}</span>
                    <span class='badge badge-success'> Followers : ${user.following}</span>
                    <br><br>
                    <ul class='list-group'>
                        <li class='list-group-item'>Name : ${user.name} </li>
                        <li class='list-group-item'>Company : ${user.company} </li>
                        <li class='list-group-item'>Blog : ${user.blog} </li>
                        <li class='list-group-item'>Location : ${user.location} </li>
                        <li class='list-group-item'>Member Since : ${user.created_at} </li>
                    </ul>
                </div>
            </div>
        <div>
        `
    }

    showRepo(repos){
        console.log(repos);
        let output = '';
        output += '<h4> Latest Repos </h4> '
        repos.forEach((repo) => {
            output += `
            
            <div class='card card-body'>
                <div class='row'>
                    <div class='col-md-6'>
                        <a href=${repo.html_url} target=_blank> ${repo.name} </a>
                    </div>
                    <div class='col-md-6'>
                        <span class='badge badge-primary'> Stars : ${repo.stargazers_count}</span>
                        <span class='badge badge-secondary'> Watchers : ${repo.watchers_count}</span>
                        <span class='badge badge-success'> Forks : ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `
        });

        this.repos.innerHTML = output;
    }

    clearUser(){
        this.profile.innerHTML = '';
        this.repos.innerHTML = '';

    }

    showAlert(message, className){
        //Clear any existing alerts
        this.clearAlert();

        //find parent in which alert should be added
        const container = document.querySelector('.searchContainer');
        
        //find element before which alert should be added
        const card = document.querySelector('.search')

        //create the alert
        const error = document.createElement('p');

        //add the error message to be displayed
        error.textContent = message;

        //add the bootstrap classes required
        error.className = className;

        //insert the alert into correct position
        container.insertBefore(error, card);

        //remove alert after 3s
        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}