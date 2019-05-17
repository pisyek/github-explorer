const path = require('path');

require('dotenv').config({path: path.join(__dirname, '../.env')});

const { assert } = require('chai');

describe('Env', function() {
    it('PORT must be defined.', function() {
        assert.exists(process.env.PORT);
    });

    it('GITHUB_TOKEN must be defined.', function() {
        assert.exists(process.env.GITHUB_TOKEN);
    });

    it('DB_HOST must be defined.', function() {
        assert.exists(process.env.DB_HOST);
    });

    it('DB_PORT must be defined.', function() {
        assert.exists(process.env.DB_PORT);
    });

    it('DB_NAME must be defined.', function() {
        assert.exists(process.env.DB_NAME);
    });
});