//Instance of the GitHub class
const github = new GitHub;

//Instance of the UI class
const ui = new UI;

const userInput = document.getElementById('searchUser')
userInput.addEventListener('keyup', getProfile);

//get Profile data of the data inputted
function getProfile(e){
    const input = e.target.value;
    if(input !== ''){
        github.getUser(input).then(data => {
            if(data.profile.message === "Not Found"){
                ui.showAlert('User not found', 'alert alert-danger mt-2');
                console.log("Not Found");
            }
            else{
                ui.showUser(data.profile);
                ui.showRepo(data.repos);
            }
        }).catch(err => console.log(err));
    }
    else{
        // Clear screen
        ui.clearUser();
    }
}

