const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
//const socket = require('socket.io');

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(require('./routes/index'))
app.use(require('./routes/artists'))
app.use(require('./routes/contact'))
//app.use(require('./routes/chat'))
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})