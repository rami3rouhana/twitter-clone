// define variables 
let signInButton = document.getElementById("sign-in");
let signUpButton = document.getElementById("sign-up");
let signInModal= document.getElementById("sign-in-modal")

// when sign in button clicked
signInButton.onclick = function() {
    signInModal.style.display = "block"; //display the sign in form as modal
}

//when window is clicked when sign in modal is displayed
window.onclick = function(event) {
    if (event.target == signInModal) {
        signInModal.style.display = "none"; // hide the sign in button
    }
}