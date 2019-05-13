require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const hbs =  require('hbs');
const port = process.env.PORT;
const publicDir = path.join(__dirname, './public');

app.set('view engine', 'hbs');

app.use(express.static(publicDir));

app.get('/', (req, res) => res.render('index'));

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => console.log(`Node app is listening on port ${port}!`))