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
let firstName = document.querySelector("#first-name").value;
let lastName = document.querySelector("#last-name").value;
let email = document.querySelector("#email").value;
let password = document.querySelector("#password").value;
let registerButton = document.querySelector("#sign-up-btn");
let registerForm=document.querySelector("#register-form");

//prevent refresh 
registerForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

//click on sign up
signInButton.addEventListener('click', signUpOperation());

function signUpOperation() {
    let url = "http://localhost/bootstrap-with-db/php/register.php";
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

