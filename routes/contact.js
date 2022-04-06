const express = require('express');
const router = express.Router();


//read and wtite to a file
const fs = require('fs');


const contactData = require('../data/contact.json'); //import comments json from conatact.json
//console.log(contactData) //[{},{}]
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.get('/contact', (req, res) => {
    res.render('contact')
})

//make api call to get all comments from contact json res.json(contactData) go to localHost:3000/api
router.get('/api',(req, res)=> {
    res.json(contactData)
})

//submit new comment 
router.post('/api', (req, res) => {
    //get data out of the header, scrape data, body parser router.use(express.json()) & router.use(express.urlencoder({extended:true}))
    let {name, email, comment} = req.body;
    //push it to the object in js (contactData obj)
    contactData.unshift(req.body);
    //wite to a file, on top: const fs = require('fs');
    fs.writeFile('data/contact.json', JSON.stringify(contactData), 'utf8',err =>{ //file you want to write to, reference from the top of your app, second:where to save
        if (err) {
        console.log('feedback.json file has been updated')//convert to json//resave
    }
    })
 //send back all messages with all messages attached
    res.json(contactData)
})
//delete new message
// Example of preventing default event of a form:
// 1. - stop the submission from happening
// 2. - extract the data you need
// 3. - do some logic
// 4. - update the page
//     ** by default, after a form is submitted the URL will change.The action attribute specifies where to send the form - data when a form is submitted. 


//! the event you want to listen to is -form submission-, so you will select the form
// const tweetForm = document.querySelector("#tweetForm")
// const ul = document.querySelector("#tweets")
// tweetForm.addEventListener("submit", function (e) {
//     console.log("submited");
//     //! stop the defaul action of the form (do not change the URL and stay on the same page)
//     e.preventDefault();
//     //! console.dir(tweetForm) got to elements to see the list of elements and select them by the element name given in HTML (comment, userName), get the value
//     let userNameInput = tweetForm.elements.userName.value;
//     let tweetInput = tweetForm.elements.comment.value;

//     //! make a function for this:
//     // let newTweet = document.createElement("li");
//     // newTweet.innerHTML = `<b>${userNameInput}</b> commented: <i>${tweetInput}</i>` 
//     // ul.appendChild(newTweet)
//     // userNameInput = "";
//     // tweetInput = ""
//     addTweets(userNameInput, tweetInput)

//     //reset the input
//     tweetForm.elements.userName.value = "";
//     tweetForm.elements.comment.value = "";
// });

// //! convert to a function
// const addTweets = (username, comment) => {
//     let newTweet = document.createElement("li");
//     newTweet.innerHTML = `<b>${username}</b> commented: <i>${comment}</i>`;
//     ul.appendChild(newTweet)

// }


module.exports = router;







