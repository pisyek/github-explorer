const path = require('path');
const User = require('../src/user/userModel');

require('dotenv').config({path: path.join(__dirname, '../.env')});
require('../src/db/mongoose');

const { assert } = require('chai');

describe('User', function() {
    it('Run admin seeder', async function() {
        const user = await User.findOne({email: process.env.ADMIN_EMAIL});
        assert.notEqual(user, null);
    });
});