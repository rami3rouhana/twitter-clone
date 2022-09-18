import { TweetButton } from "./TweetButton.js";
import { DisplayPosts } from "./DisplayPosts.js";
import { UserInfo } from "./UserInfo.js";

if (localStorage.getItem("user_id") === null) {
    window.location = "../frontend/landing-page.html";
}
UserInfo();
DisplayPosts();
TweetButton();
