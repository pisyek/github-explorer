const path = require('path');

require('dotenv').config({path: path.join(__dirname, '../.env')});

const { assert } = require('chai');

describe('Env Setting', function() {
    it('PORT must be defined.', function() {
        let port = process.env.PORT;
        assert.exists(port);
    });

    it('GITHUB_TOKEN must be defined.', function() {
        let token = process.env.GITHUB_TOKEN;
        assert.exists(token);
    });
});