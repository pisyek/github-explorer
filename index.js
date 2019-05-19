require('dotenv').config();
require('./src/db/mongoose');

const path = require('path');
const express = require('express');
const app = express();
const hbs =  require('hbs');
const port = process.env.PORT;
const publicDir = path.join(__dirname, './public');
const partialsDir = path.join(__dirname, './views/partials');
const userRouter = require('./src/user/userRouter');
const searchRouter = require('./src/search/searchRouter');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

// Session
app.set('trust proxy', 1);
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Passport
require('./src/lib/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// View setting
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static(publicDir));

// HBS 
hbs.registerPartials(partialsDir);
hbs.registerHelper('incremented', function(value) {
    return parseInt(value) + 1;
});

app.use(express.urlencoded({extended:true}));
app.use(userRouter);
app.use(searchRouter);

app.get('/', (req, res) => res.render('index'));

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => console.log(`Node app is listening on port ${port}!`))