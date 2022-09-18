export const Posts = ( info ) => {
    return (`
    <div class="post" id=${info.id}>
    <div class="post-header">
        <img class="profile-picture" src="./images/profile-picture.jpg" >
        <div class="post-text">
            <div class="post-user-info">
                <span class="user-name">${info.name}</span>
                <span class="user-email">${info.email}</span>
            </div>
            <span class="user-post">${info.text}</span>
        </div>
        <button class="delete-post">X</button>
    </div>
    <img src="../backend/${info.image}" class="post-image" >
    <div class="post-footer">
        <button class="post-like" ><img class="post-action" src="./images/like.png"></button>
        <button class="post-comment"><img class="post-action" src="./images/comment.png"></button>
    </div>
    <div id="comments" class="comments">
        <div class="comment-inputs">
            <input type="text" placeholder="tweet your reply" class="user-write-comment" > <button type="submit" class="reply-btn">reply</button>
            
        </div>
        ${info.comments}
    </div>
</div>
    `);
}