import { removeComment } from "./PostActions.js";


export const Comment = ( info ) => {
    return (`
    <div class="comment" id="${info.id}">
    <img class="profile-picture" src="${info.image}" >
    <div class="comment-text">
        <div class="comment-user-info">
            <span class="comment-user-name">${info.name}</span>
            <span class="comment-user-email">${info.email}</span>
        </div>
            <span class="user-comment">${info.text}</span>
    </div>
    <button class="delete-comment"}">X</button>

</div>
    `);
}