require('dotenv').config();

const mongoose = require('mongoose');
const {DB_HOST, DB_PORT, DB_NAME} = process.env;

const database = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
mongoose.connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});