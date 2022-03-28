const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(require('./routes/index'))
app.use(require('./routes/artists'))
app.use(require('./routes/contact'))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})