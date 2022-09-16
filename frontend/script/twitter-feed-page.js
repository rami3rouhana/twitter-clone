// Reusable variables
const tweetImage = document.getElementById("upload-post-image");

// Add label listner
document.getElementById("upload-div").addEventListener("click" ,()=>{
    tweetImage.click();
})

// Check file type
function isFileImage(file) {
    return file && file['type'].split('/')[0] === 'image';
}

// Tweet functionality 
const tweet = async() => {
    url = "";

    // Retrieving data
    const tweetText = document.getElementById("tweet-text").value;
    if(isFileImage(tweetImage)){
        const image64 = btoa(tweetImage.files[0]);
    }else{
        alert("Please enter an image");
        return;
    }

    // Send data to the backend
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                tweetText,
                image64
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
          })
        if(res){
            
        }
    } catch (error) {
        console.log(error)
    }
    
}

document.getElementById("tweet-submit").addEventListener("click", tweet);