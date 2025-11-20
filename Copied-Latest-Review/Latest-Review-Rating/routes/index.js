const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
        title: 'Home Page',
        description: 'A sleek web app that lets users discover, organize, and track their favorite games all in one place.'
    };

    res.render('index', { locals });
});

module.exports = router;