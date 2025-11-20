const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
        title: 'View Orders Page',
        description: 'View all your past and current orders in one place on GameVault.'
    };

    res.render('shopping-cart/orders', { locals, layout: './layouts/admin_main.ejs' });
});

module.exports = router;