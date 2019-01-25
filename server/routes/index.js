const express = require('express');

const router = express.Router();

const playerRoute = require('./player');
const goalRoute = require('./goal');

module.exports = (param) => {

    const { playerService } = param;

    router.get('/', async (req, res, next) => {
        try {
            const players = await playerService.getListShort();

            return res.render('index', {
                page: 'All Players',
                playerList: players,
            });
        } catch (err) {
            return next(err);
        }
    });

    router.use('/players', playerRoute(param));
    router.use('/goal', goalRoute(param));

    return router;
};