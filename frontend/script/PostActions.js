
    export const addLike = async ( postId, userId ) =>{
        const url = "http://localhost/twitter-clone/backend/add_like.php";
        
        let body ={
            postId,
            userId
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

    export const removeLike = async ( likeId ) =>{
        const url = "http://localhost/twitter-clone/backend/remove_like.php";
        
        let body ={
            likeId
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

    export const addComment = async ( userId, postId, text ) =>{
        debugger
        const url = "http://localhost/twitter-clone/backend/add_comment.php";
        
        let body ={
            postId,
            userId,
            text
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

    export const removeComment = async ( commentId ) =>{
        const url = "http://localhost/twitter-clone/backend/remove_comment.php";
        
        let body ={
            commentId
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

    export const removePost = async ( postId ) =>{
        const url = "http://localhost/twitter-clone/backend/remove_post.php";
        
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