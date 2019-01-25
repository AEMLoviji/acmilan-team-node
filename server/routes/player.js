const express = require('express');

const router = express.Router();

module.exports = (param) => {

    const { playerService } = param;

    router.get('/', async (req, res, next) => {
        try {
            const players = await playerService.getListShort();

            return res.render('player', {
                page: 'All Players',
                playerList: players
            });
        } catch (err) {
            return err;
        }
    });

    router.get('/:name', async (req, res, next) => {
        try {
            const player = await playerService.getPlayer(req.params.name);

            if (!player) {
                return next();
            }

            return res.render('player/detail', {
                page: req.params.name,
                player: player,
            });
        } catch (err) {
            return next(err);
        }

    });

    return router;
};