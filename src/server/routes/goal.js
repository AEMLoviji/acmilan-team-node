const express = require('express');

const router = express.Router();

module.exports = (param) => {

    const { goalService } = param;

    router.get('/', async (req, res, next) => {
        try {
            const goalList = await goalService.getList();
            return res.render('goal', {
                page: 'Goals',
                goalList: goalList
            });
        } catch (err) {
            return err;
        }
    });

    return router;
};