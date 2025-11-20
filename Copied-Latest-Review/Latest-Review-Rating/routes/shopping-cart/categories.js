const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
        title: 'Categories Page',
        description: 'GameVault is a web app that categorizes and showcases games by genre, platform, and popularity, allowing users to explore, organize, and discover new titles efficiently.'
    };

    res.render('shopping-cart/categories', { locals });
});

router.get('/123', (req, res) => {
    const locals = {
        title: 'Specific Category Page',
        description: 'GameVault is a web app that allows users to view detailed information about a specific game, including its category, genre, platform, and related titles.'
    };

    res.render('shopping-cart/category', { locals });
});

module.exports = router;