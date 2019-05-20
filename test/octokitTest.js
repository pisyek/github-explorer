const octokit = require('../src/lib/octokit');

const { assert } = require('chai');

describe('Octokit', function() {
    it('Github search repo to get 1 result.', async function() {
        let result = await octokit.searchRepository('laravel', null, null, 1);
        let itemCount = result.data.items.length;
        assert.equal(itemCount, 1);
    }).timeout(15000);
});