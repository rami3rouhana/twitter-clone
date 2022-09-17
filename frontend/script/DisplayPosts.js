import { addLike, addComment, removeComment, removeLike, removePost } from "./PostActions.js";

export const DisplayPosts = () => {

    // Receiving posts from the database
    const receiveComments = async (postId) =>{
        const url = "http://localhost/twitter-clone/backend/get_post_comments.php";
        
        let body ={
            postId
        }

        body = JSON.stringify(body);

        try {
            const res = await fetch(url,{
                method:"POST",
                body
            });
            const resData = await res.json();
        } catch (error) {
            console.log(error)
        }
    }

    // Receiving posts from the database
    const receiveLikes = async ( postId ) =>{
        const url = "http://localhost/twitter-clone/backend/count_post_likes.php";
        let body ={
            postId
        }

        body = JSON.stringify(body);

        try {
            const res = await fetch(url,{
                method:"POST",
                body
            });
            const resData = await res.json();
            //resData['COUNT(id)']

        } catch (error) {
            console.log(error)
        }
    }
}