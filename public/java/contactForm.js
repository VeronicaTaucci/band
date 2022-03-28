// delete new message
// Example of preventing default event of a form:
// 1. - stop the submission from happening
// 2. - extract the data you need
// 3. - do some logic
// 4. - update the page
//     ** by default, after a form is submitted the URL will change.The action attribute specifies where to send the form - data when a form is submitted. 


// ! the event you want to listen to is -form submission-, so you will select the form
const tweetForm = document.querySelector("#tweetForm")
const ul = document.querySelector("#tweets")
tweetForm.addEventListener("submit", function (e) {
    console.log("submited");
    //! stop the defaul action of the form (do not change the URL and stay on the same page)
    e.preventDefault();
    //! console.dir(tweetForm) got to elements to see the list of elements and select them by the element name given in HTML (comment, name), get the value
    let userNameInput = tweetForm.elements.name.value;
    let tweetInput = tweetForm.elements.comment.value;

    //! make a function for this:
    // let newTweet = document.createElement("li");
    // newTweet.innerHTML = `<b>${userNameInput}</b> commented: <i>${tweetInput}</i>` 
    // ul.appendChild(newTweet)
    // userNameInput = "";
    // tweetInput = ""
   addTweets(userNameInput, tweetInput)

    // //reset the input
    tweetForm.elements.name.value = "";
    tweetForm.elements.comment.value = "";
});

//! convert to a function
function addTweets(username, comment) {
    let newTweet = document.createElement("li");
    newTweet.innerHTML = `<b>${username}</b> commented: <i>${comment}</i>`;
    ul.appendChild(newTweet);

}
// let form = document.querySelector('form')


// form.addEventListener('submit', async (e) => {
//     //prevent default behavour of the form 
//     e.preventDefault()

//     //make a fetch /api

//     let newMessage = {
//         name: document.querySelector('#feedback-form-name').value,
//         title: document.querySelector('#feedback-form-title').value,
//         message: document.querySelector('#feedback-form-message').value
//     }

//     let results = await fetch('/api', {
//         method: "POST",
//         headers: { 'Content-type': 'application/json; charset=UTF-8' },
//         body: JSON.stringify(newMessage)
//     })

//     let messages = await results.json()
//     updateFeedback(messages)

// });

// const displayMessages = async (second) => { //make api to display the messages
//     let result = await fetch('/api');
//     let messages = await result.json();//convert to json
//     updateFeedback(messages)
// }


const updateFeedback = (messagesArr) => {
    let htmlBlock = "";
    messagesArr.forEach((item, key) => {

        htmlBlock += '     <div class="feedback-item item-list media-list">';
        htmlBlock += '       <div class="feedback-item media">';
        htmlBlock += '       <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
        htmlBlock += '         <div class="feedback-info media-body">';
        htmlBlock += '           <div class="feedback-head">';
        htmlBlock += '             <div class="feedback-title"> <small class="feedback-name label label-info">' + item.name + '</small></div>';
        htmlBlock += '           </div>';
        htmlBlock += '           <div class="feedback-message">' + item.comment + '</div>';
        htmlBlock += '         </div>';
        htmlBlock += '       </div>';
        htmlBlock += '     </div>';
    })

    //attach to a dom element
    let feedbackMessages = document.querySelector('.feedback-messages');
    feedbackMessages.innerHTML = htmlBlock;
}
updateFeedback();