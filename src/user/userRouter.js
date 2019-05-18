const express = require('express');
const router = express.Router();
const Search = require('../search/searchModel');

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/dashboard', async (req, res) => {
    let results = await Search.find({});
    res.render('dashboard', {
        results
    });
});

router.get('/dashboard/search/:id', async (req, res) => {
    const id = req.params.id;
    try {
        let result = await Search.findById(id);
        if (!result) {
            return res.status(404).send('Not found');
        }

        res.render('search-detail', {
            result
        });
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = router;
