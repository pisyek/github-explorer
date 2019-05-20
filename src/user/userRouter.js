const express = require('express');
const router = express.Router();
const Search = require('../search/searchModel');
const passport = require('passport');

router.get('/login', (req, res) => {
    if (req.user) {
        return res.redirect(`${process.env.APP_URL}/dashboard`);
    }
    
    res.render('login', {
        error: req.flash('error'),
        user: req.user
    });
});

router.post('/login', async (req, res, next) => {
    passport.authenticate('local', {
            successRedirect: `${process.env.APP_URL}/dashboard`,
            failureRedirect: `${process.env.APP_URL}/login`,
            failureFlash: 'Invalid credentials.'
        })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(`${process.env.APP_URL}`);
});

router.get('/dashboard', isAuthenticated, async (req, res) => {
    let results = await Search.find({});
    res.render('dashboard', {
        results,
        user: req.user
    });
});

router.get('/dashboard/search/:id', isAuthenticated, async (req, res) => {
    const id = req.params.id;
    try {
        let result = await Search.findById(id);
        if (!result) {
            return res.status(404).send('Not found');
        }

        res.render('search-detail', {
            result,
            user: req.user
        });
    } catch (error) {
        return res.status(500).send(error);
    }
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error', 'Please login.');
        res.redirect(`${process.env.APP_URL}/login`);
    }
}

module.exports = router;
