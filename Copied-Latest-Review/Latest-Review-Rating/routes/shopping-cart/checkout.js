const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
        title: 'Checkout Page',
        description: 'The checkout in the GameVault web app allows users to securely complete their game purchases and finalize transactions with multiple payment options.'
    };

    res.render('shopping-cart/checkout', { locals, layout: './layouts/admin_main.ejs' });
});

module.exports = router;