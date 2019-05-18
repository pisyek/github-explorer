const express = require('express');
const router = express.Router();
const octokit = require('../lib/octokit');
const Search = require('./searchModel');

router.get('/search-github', async (req, res) => {
    const repository = req.query.repository;
    const language = req.query.language;
    const topic = req.query.topic;

    let data = await octokit.searchRepository(repository, language, topic);
    let search = new Search({
        param: {repository, language, topic},
        result: data.data.items
    });

    await search.save();

    res.send({
        result: data,
        repository,
        language,
        topic
    });
});

module.exports = router;