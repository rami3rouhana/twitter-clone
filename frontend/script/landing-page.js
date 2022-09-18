if (localStorage.getItem("user_id") !== null) {
    window.location = "../frontend/landing-page.html";
}

// define variables 
let signInButton = document.getElementById("sign-in");
let signUpButton = document.getElementById("sign-up");
let signInModal= document.getElementById("sign-in-modal")
let signUpModal= document.getElementById("sign-up-modal")

// when sign in button clicked
signInButton.onclick = function() {
    signInModal.style.display = "block"; //display the sign in form as modal
}
// when sign up button clicked
signUpButton.onclick = function() {
    signUpModal.style.display = "block"; //display the sign in form as modal
}

//when window is clicked when sign in modal is displayed
window.onclick = function(event) {
    if (event.target == signInModal) {
        signInModal.style.display = "none"; // hide the sign in page
    }
    if (event.target == signUpModal) {
        signUpModal.style.display = "none"; // hide the sign up page
    }

}


//register page 
const registerButton = document.getElementById("register-btn");
const registerForm=document.querySelector("#register-form");

//prevent refresh 
registerForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

//click on sign up button
registerButton.addEventListener('click', signUpOperation);


// sign up operation
async function signUpOperation() {

    //define variables
    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    //password specifications 
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    //define input warnings
    const firstNameWarning = document.querySelector("#fname-warning");
    const lastNameWarning = document.querySelector("#lname-warning");
    const emailWarning = document.querySelector("#email-warning");
    const passwordWarning = document.querySelector("#password-warning");

    //input validation
    if (firstName.length > 8 ||firstName.length <2) {
        firstNameWarning.innerHTML = "please enter first name between 2 and 10 characters";
    } else if (lastName.length > 8 || lastName.length < 2) {
        lastNameWarning.innerHTML = "please enter last name between 2 and 10 characters";
        firstNameWarning.innerHTML = "";
    }else if (password.length <5 || !password.match(numbers) || !password.match(upperCaseLetters) || !password.match(lowerCaseLetters)) {
        passwordWarning.innerHTML = "your password must contains minimum 5 characters include uppercases , lowercases and numbers";
        firstNameWarning.innerHTML = "";
        lastNameWarning.innerHTML = "";
    
    }
    else {
        //api request and response
        const url = "http://localhost/twitter-clone/backend/register.php";
        let parameters = {
            method:'POST',
            body: new URLSearchParams({
                fname:firstName,
                lname:lastName,
                email,
                password
            })
        }
        await fetch(url,parameters)
            .then(response=>response.json())
            .then(data => {
                localStorage.setItem("user_id", data.id);
                window.location = "../frontend/twitter-feed.html";
                if (data.email > 1) {
                    emailWarning.innerHTML = "Your email is already exist";
                    passwordWarning.innerHTML = "";
                }
            }
        )
            .catch(err => console.log(err));
    }
}

// login page

loginButton = document.querySelector("#login-button");
//click on sign in buttom
loginButton.addEventListener('click', signInOperation);
//prevent refresh
loginForm = document.getElementById("loginform");
loginForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

//sign in operation
async function signInOperation(){
    //define variable
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    const url = "http://localhost/twitter-clone/backend/login.php";

    let parameters = {
        method:'POST',
        body: new URLSearchParams({
            email:email,
            password:password
        })
    }
    await fetch(url,parameters)
        .then(response=>response.json())
        .then(data => {
            localStorage.setItem("user_id", data[0]);
            window.location = "../frontend/twitter-feed.html";
            // localStorage.setItem('pw', pw.value);
        })
        .catch(err => console.log(err));
        
}



















// function store(){

//     var name = document.getElementById('name');
//     var pw = document.getElementById('pw');
//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;

//     if(name.value.length == 0){
//         alert('Please fill in email');

//     }else if(pw.value.length == 0){
//         alert('Please fill in password');

//     }else if(name.value.length == 0 && pw.value.length == 0){
//         alert('Please fill in email and password');

//     }else if(pw.value.length > 8){
//         alert('Max of 8');

//     }else if(!pw.value.match(numbers)){
//         alert('please add 1 number');

//     }else if(!pw.value.match(upperCaseLetters)){
//         alert('please add 1 uppercase letter');

//     }else if(!pw.value.match(lowerCaseLetters)){
//         alert('please add 1 lovercase letter');

//     }else{
//         localStorage.setItem('name', name.value);
//         localStorage.setItem('pw', pw.value);
//         alert('Your account has been created');
//     }
// }

// //checking
// function check(){
//     var storedName = localStorage.getItem('name');
//     var storedPw = localStorage.getItem('pw');

//     var userName = document.getElementById('userName');
//     var userPw = document.getElementById('userPw');
//     var userRemember = document.getElementById("rememberMe");

//     if(userName.value == storedName && userPw.value == storedPw){
//         alert('You are logged in.');
//     }else{
//         alert('Error on login');
//     }}