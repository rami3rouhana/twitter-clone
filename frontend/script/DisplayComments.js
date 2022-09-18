import { Comment } from './Comment.js'

let comments =0

export const DisplayComments = async (postId) => {


    const url = "http://localhost/twitter-clone/backend/get_post_comments.php";

    let body = {
        postId
    }

    body = JSON.stringify(body);
    try {
        const res = await fetch(url, {
            method: "POST",
            body
        })
        const resData = await res.json();
        if(resData.length>0){
            await Promise.all (  
            resData.map( async  comment => {
            const id = comment.id;
            const name = comment.first_name + " " + comment.last_name;
            const text = comment.text;
            const email = comment.email;
            const image = comment.image;
            const userId = comment.users_id;
            comments[id] = Comment({ id, name, email, text, image, postId,userId }); 
            return data;
        }))}else{
            return "No more messages";
        }
    } catch (error) {
        console.log(error)
    }
}