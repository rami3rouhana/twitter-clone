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
    if(document.getElementById("change-profile")){
    document.getElementById("change-profile").onchange =( e )=>{
        const readFile = (file) => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
          
              reader.onload = res => {
                resolve(res.target.result);
              };
              reader.onerror = err => reject(err);
          
              reader.readAsDataURL(file);
            });
          }    
          const udateImage = async ( e ) => {
            debugger
              const changeProfile = document.getElementById("change-profile").files[0];
          
              // Encrypt Image
              let encryptedImage = await readFile(changeProfile);   
              encryptedImage = encryptedImage.split(",")[1];
          
              const imageExtension = changeProfile.name.split(".")[changeProfile.name.split(".").length -1];
          
              const url = "http://localhost/twitter-clone/backend/change_profile.php";
          
              const userId = localStorage.getItem("user_id");
          
              // Send data to the backend
              try {
                  const res = await fetch(url, {
                      method: 'POST',
                      body: JSON.stringify({
                          encryptedImage,
                          imageExtension,
                          userId
                      }),
                      headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      }
                    })
                    const data = await res.json();
                    
                  } catch (error) {
                    debugger
                    console.log(error)
              }
              
          }
          udateImage();
    }}

    
    document.getElementById("profile-page").addEventListener("click", () =>
      window.location = "../frontend/userprofile.html"
    )
}