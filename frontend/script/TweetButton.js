export const TweetButton = () => {
// Reusable variables
const tweetImage = document.getElementById("upload-post-image");

// Add label listner
document.getElementById("upload-div").addEventListener("click" ,()=>{
    tweetImage.click();
})

// Check file type
const isFileImage = (file) => {
    return file && file['type'].split('/')[0] === 'image';
}

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

// Tweet functionality 
const tweet = async ( e ) => {
    e.preventDefault;
    const userId = 1;

    // Retrieving data
    const tweetText = document.getElementById("tweet-text").value;


    // Encrypt Image
    let encryptedImage = await readFile(tweetImage.files[0]);   
    encryptedImage = encryptedImage.split(",")[1];

    const imageExtension = tweetImage.files[0].name.split(".")[tweetImage.files[0].name.split(".").length -1];

    url = "http://localhost/twitter-clone/backend/tweet.php";

    // Send data to the backend
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                tweetText,
                encryptedImage,
                imageExtension,
                userId
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
          })
          debugger
          const data = await res.json();
        } catch (error) {
            debugger
        console.log(error)
    }
    
}

document.getElementById("tweet-submit").addEventListener("click", tweet);

}