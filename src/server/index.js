const express = require('express');
const createError = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
const configs = require('./config');
const PlayerService = require('./services/PlayerService');
const GoalService = require('./services/GoalService');
const app = express();

const config = configs[app.get('env')];

const playerService = new PlayerService(config.data.players);
const goalService = new GoalService(config.data.goals);

//setting view engine
app.set('view engine', 'pug');
if (app.get('env') === 'development') {
    //prettifying HTML in development mode for inpecting purposes
    app.locals.pretty = true;
}
app.set('views', path.join(__dirname, './views'));
app.locals.title = configs["sitename"];

const routes = require('./routes');
//setting public folder to make static resources available from ourside
<<<<<<< HEAD
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, '/public')));
=======
app.use(express.static(__dirname + '/public'));
>>>>>>> 491bd30... public static resources path made dynamic
=======
app.use(express.static(path.join(__dirname, '/public')));
>>>>>>> 056aa09... one more changes

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
});

//on each request get players name
// app.use(async (req, res, next) => {
//     try {
//         const names = await playerService.getNames();
//         res.locals.playersNames = names;
//         return next();
//     } catch (err) {
//         return next(err);
//     }
// });
<<<<<<< HEAD
<<<<<<< HEAD
app.use(async (req, res, next) => {
=======
app.use((req, res, next) => {
>>>>>>> d7321a2... async call removed
=======
app.use(async (req, res, next) => {
>>>>>>> d082fb7... changes getNames method to async call
    try {
        const names = await playerService.getNames();
        res.locals.playersNames = names;
        return next();
    } catch (err) {
        return next(err);
    }
});


//registering all routers
app.use('/', routes({
    playerService,
    goalService,
}));

//exception handling using 'http-errors' module imported 
app.use((req, res, next) => {
    return next(createError(404, 'File not found'));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    const status = err.status || 500;
    res.locals.status = status;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(status);
    return res.render('error');
});

<<<<<<< HEAD
<<<<<<< HEAD
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + listener.address().port);
});
=======
app.listen(process.env.PORT || 3000);
>>>>>>> f690a60... port made dynamic from env
=======
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + listener.address().port);
});
>>>>>>> 491bd30... public static resources path made dynamic

module.export = app;