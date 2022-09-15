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

//click on sign up
registerButton.addEventListener('click', signUpOperation);

function signUpOperation() {
    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const url = "http://localhost/twitter-clone/backend/register.php";
    // debugger
    let parameters = {
        method:'POST',
        body: new URLSearchParams({
            fname:firstName,
            lname:lastName,
            email:email,
            password:password
        })
    }

    fetch(url,parameters)
        .then(respone=>respone.json())
        .then(data=>console.log(data));
        
}

