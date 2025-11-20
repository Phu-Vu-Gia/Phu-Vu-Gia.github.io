const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
        title: 'Shopping Cart Page',
        description: 'GameVault is a web app that streamlines game shopping with secure payments and an easy-to-use cart system.'
    };

    res.render('shopping-cart/cart', { locals });
});

module.exports = router;