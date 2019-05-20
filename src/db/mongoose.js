require('dotenv').config();

const mongoose = require('mongoose');
const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME, DB_AUTH} = process.env;

const database = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
mongoose.connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    authSource: DB_AUTH
});