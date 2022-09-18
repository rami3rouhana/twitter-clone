import { TweetButton } from "./TweetButton.js";
import { DisplayPosts } from "./DisplayPosts.js";

debugger
if (localStorage.getItem("user_id") === null) {
    window.location = "../frontend/landing-page.html";
}
TweetButton();
DisplayPosts();
