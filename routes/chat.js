// const express = require('express');
// const router = express.Router();
// const app = express();
// const socket = require('socket.io');
// let port = 3000;

// app.get("/chat", (req, res) => {
//     res.render("chat")
// })

// let server = app.listen(port, () => {
//     console.log(`listening to the port ${port}`)
// })

// let io = socket(server)

// //listen for messages from the cliend
// io.on("connection", socket=> {
//     console.log("new client connected")

// })
// //when a message is received, broadcast it to all the users
// module.exports = router;