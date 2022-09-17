export const DisplayPosts = () => {

    // Receiving posts from the database
    const receiveComments = async () =>{
        const url = "http://localhost/twitter-clone/backend/get_post_comments.php";
        const postId = 1;
        
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
    const receiveLikes = async () =>{
        const url = "http://localhost/twitter-clone/backend/count_post_likes.php";
        const postId = 1;
        
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

    receiveLikes();
}