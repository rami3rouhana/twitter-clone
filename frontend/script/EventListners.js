import { addLike, addComment, removeComment, removeLike, removePost } from "./PostActions.js";

export const EventListners = async ( ) => {

    let postsComment = []

    const commentTexts = document.getElementsByClassName("user-write-comment");
    
    for ( let commentText of commentTexts){
        commentText.addEventListener("blur",(e)=>{
            const text = e.currentTarget.value;
            debugger
            postsComment[e.currentTarget.parentElement.parentElement.parentElement.id]= e.currentTarget.value;
        })    
    }

    const commentSubmits = document.getElementsByClassName("reply-btn");
    
    for ( let commentSubmit of commentSubmits){
        commentSubmit.addEventListener("click",(e)=>{
            const postId = e.currentTarget.parentElement.parentElement.parentElement.id;
            const userId = localStorage.getItem("user_id");
            addComment(userId,postId,postsComment[postId])
        })    
    }

    const deletePosts = document.getElementsByClassName("delete-post");
    
    for ( let deletePost of deletePosts){
        deletePost.addEventListener("click",(e)=>{
            const postId = e.currentTarget.parentElement.parentElement.id;
            removePost(postId)
        })    
    }
}