export const UserInfo = async (postId) => {


    const url = "http://localhost/twitter-clone/backend/user_info.php";

    const userId = localStorage.getItem("user_id");

    let body = {
        userId
    }

    body = JSON.stringify(body);
    try {
        const res = await fetch(url, {
            method: "POST",
            body
        })
        const resData = await res.json();
        document.getElementById("userImage").src = "../backend/"+resData[0].profile;
        document.getElementById("tweetImage").src = "../backend/"+resData[0].profile;
        document.getElementById("profile-image").src = "../backend/"+resData[0].profile;
        document.getElementById("userName").innerHTML = resData[0].first_name + " " + resData[0].last_name;
        document.getElementById("userEmail").innerHTML = resData[0].email;
        document.getElementById("profile-image")
        } catch (error) {
        console.log(error)
    }
}