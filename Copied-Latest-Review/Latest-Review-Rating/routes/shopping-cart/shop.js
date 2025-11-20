const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
        title: 'Shopping Page - Gaming Store',
        description: 'A seamless web app that lets gamers browse, add, and purchase their favorite titles with an intuitive shopping experience.'
    };

    res.render('shopping-cart/shop', { locals });
});

router.get('/game/:id', (req, res) => {
    const locals = {
        title: 'Gaming Description',
        description: 'GameVault is a web app that lets users explore a vast library of games, view detailed descriptions, and discover everything about their favorite titles in one place.'
    };

    res.render('shopping-cart/game', { locals });
});

router.get('/admin', (req, res) => {
    const locals = {
        title: 'Shopping Page - Gaming Store',
        description: 'A seamless web app that lets gamers browse, add, and purchase their favorite titles with an intuitive shopping experience.'
    };

    res.render('shopping-cart/admin_shop', { locals, layout: './layouts/admin_main.ejs' });
});

module.exports = router;