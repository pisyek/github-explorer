require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const hbs =  require('hbs');
const octokit = require('./src/lib/octokit');
const port = process.env.PORT;
const publicDir = path.join(__dirname, './public');

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static(publicDir));

app.get('/', (req, res) => res.render('index'));

app.get('/search-github', async (req, res) => {
    const repository = req.query.repository;
    const language = req.query.language;
    const topic = req.query.topic;

    let data = await octokit.searchRepository(repository, language, topic);

    res.send({
        result: data,
        repository,
        language,
        topic
    });
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => console.log(`Node app is listening on port ${port}!`))