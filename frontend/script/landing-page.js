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
// registerForm.addEventListener("submit", function (evt) {
//     evt.preventDefault();
// });

//click on sign up button
registerButton.addEventListener('click', signUpOperation);
// sign up operation
async function signUpOperation  (e) {
    e.preventDefault();
    //define variables
    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const url = "http://localhost/twitter-clone/backend/register.php";

    let parameters = {
        method:'POST',
        body: new URLSearchParams({
            fname:firstName,
            lname:lastName,
            email:email,
            password:password
        })
    }
    await fetch(url,parameters)
        .then(response=>response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
        
}

// login page

loginButton = document.querySelector("#login-button");
//click on sign in buttom
loginButton.addEventListener('click', signInOperation);
//sign in operation
async function signInOperation  (e) {
    e.preventDefault();
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
        .then(data => console.log(data))
        .catch(err => console.log(err));
        
}