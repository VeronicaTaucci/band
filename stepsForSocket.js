//! 1. npm install socket.io
//! 2. in app.js: const socket = require("socket.io");
//!3. make an instance of the express and pass it to a socket server:
        // let server = app.listen(PORT, () => {
        //     console.log(`listening on port ${PORT}`)
        // })
//!4. pass the instance of express to socket 
        // const io = socket(server); //socket server
//! 5. if a request that is requesting to connect on a different layer

// io.on("connection", socket => { //io.on is an event listener, arg1 = type of event ->"connection", arg2=cb
//     socket.on("msgFromClient", clientMsg => {
//         io.emit("msgFromServer", clientMsg);
//     })
// })

//* in the ejs file
//!6. import script tag to ejs:
/* <script src="https://cdn.socket.io/4.4.1/socket.io.min.js" integrity="sha384-fKnu0iswBIqkjxrhQCTZ7qlLHOFEgNkRmK2vaO/LbTZSXdJfAu6ewRBdwHPhBo/H" crossorigin="anonymous"></script> */
//! 7. in the public/js/chat.js
const socket = io();

const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const messageList = document.getElementById("messages");

form.addEventListener("submit", async event => {
    event.preventDefault();
    if (nameInput.value && messageInput.value) {
        socket.emit("msgFromClient", `<b>${nameInput.value.trim()}</b>: ${messageInput.value}`);
        nameInput.value = "";
        messageInput.value = "";
    }
})

socket.on("msgFromServer", serverMessage => {
    const liTag = `<li>${serverMessage}</li>`;
    messageList.innerHTML = liTag + messageList.innerHTML;
})