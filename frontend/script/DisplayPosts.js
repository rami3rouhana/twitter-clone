import { Posts } from "./Post.js"
import { DisplayComments } from "./DisplayComments.js"
import { EventListners } from "./EventListners.js"

export const DisplayPosts = () => {

    // Receiving posts from the database
    const receivePosts = async (userId) => {
        const url = "http://localhost/twitter-clone/backend/main_posts.php";

        let body = {
            userId
        }

        body = JSON.stringify(body);

        try {
            const res = await fetch(url, {
                method: "POST",
                body
            });
            const resData = await res.json();
            if(resData.length>0){
            await Promise.all (  
            resData.map( async post => {
                const id = post.id;
                const name = post.first_name + " " + post.last_name;
                const text = post.text;
                const email = post.email;
                const image = post.image;
                const userId =post.users_id;
                const comments = await DisplayComments(id);
                const data = Posts({ id, name, email, text, image, comments, userId });
                document.getElementById("posts").innerHTML += data;
                EventListners();
            }))}

        } catch (error) {
            console.log(error)
        }
    }



    // Receiving posts likes from the database
    const receiveLikes = async (postId) => {
        const url = "http://localhost/twitter-clone/backend/count_post_likes.php";
        let body = {
            postId
        }

        body = JSON.stringify(body);

        try {
            const res = await fetch(url, {
                method: "POST",
                body
            });
            const resData = await res.json();
            //resData['COUNT(id)']

        } catch (error) {
            console.log(error)
        }
    }

    receivePosts(localStorage.getItem("user_id"));
}