require('dotenv').config();
const Octokit = require('@octokit/rest');
const token = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
    auth: token
});

const searchRepository = async (keyword, language, topic, per_page = 100) => {
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
        per_page
    });

    return response;
}

module.exports = {
    searchRepository
};
