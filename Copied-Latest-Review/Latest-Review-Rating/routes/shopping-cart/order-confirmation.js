const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
        title: 'Order Confirmation Page',
        description: 'The order confirmation in the GameVault web app displays a summary of the completed purchase, confirming payment and providing order details to the user.'
    };

    res.render('shopping-cart/order-confirmation', { locals, layout: './layouts/admin_main.ejs' });
});

module.exports = router;