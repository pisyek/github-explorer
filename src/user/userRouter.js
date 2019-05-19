const express = require('express');
const router = express.Router();
const Search = require('../search/searchModel');
const passport = require('passport');

router.get('/login', (req, res) => {
    if (req.user) {
        return res.redirect('/dashboard');
    }
    
    res.render('login', {
        error: req.flash('error')
    });
});

router.post('/login', async (req, res, next) => {
    passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            failureFlash: 'Invalid credentials.'
        })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/dashboard', isAuthenticated, async (req, res) => {
    let results = await Search.find({});
    res.render('dashboard', {
        results
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
            result
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
        res.redirect('/login');
    }
}

module.exports = router;
