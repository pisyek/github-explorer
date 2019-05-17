require('dotenv').config();
require('../db/mongoose');

const {ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD} = process.env;
const User = require('./userModel');

const createUser = async (name, email, password) =>  {
    let user = new User({name, email, password});
    await user.save();
    return "Admin user is created."
};

createUser(ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD).then((success) => {
    console.log('Success: ', success);
}).catch((error) => {
    console.log('Error: ', error.errmsg);
});