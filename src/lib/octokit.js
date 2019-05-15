require('dotenv').config();
const Octokit = require('@octokit/rest');
const token = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
    auth: token
});

function getToken() {
    return token;
}

const searchRepository = async (keyword, language, topic) => {
    let q = keyword + " in:name,description";

    if (!!language) {
        q = q + "+language:"+language;
    }

    if (!!topic) {
        q = q + "+topic:"+topic;
    }

    const response = await octokit.search.repos({
        q,
        sort: 'stars',
        per_page: 100
    });

    return response;
}

module.exports = {
    getToken,
    searchRepository
};