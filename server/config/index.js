const path = require('path');

module.exports = {  
  sitename: 'AC Milan Team',
  development: {
    data: {
      players: path.join(__dirname, '../mock-data/players.json'),
      goals: path.join(__dirname, '../mock-data/goals.json'),
    }
  },
  production: {
    data: {
      players: path.join(__dirname, '../mock-data/playersjson'),
      goals: path.join(__dirname, '../mock-data/goals.json'),
    }
  },
}