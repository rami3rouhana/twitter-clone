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