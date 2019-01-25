const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class PlayerService {
  constructor(datafile) {
    this.datafile = datafile;
  }

  async getNames() {
    const data = await this.getData();

    return data.map((player) => {
      return { name: player.name };
    });
  }

  async getListShort() {
    const data = await this.getData();
    return data.map((player) => {
      return {
        name: player.name,
        number: player.number,
        nationality: player.nationality,
        position: player.position,
        photo: player.photo
      };
    });
  }


  async getPlayer(name) {
    const data = await this.getData();
    const player = data.find((player) => {
      return player.name === name;
    });

    if (!player) return null;

    return {
      name: player.name,
      number: player.number,      
      nationality: player.nationality,
      position: player.position,
      photo: player.photo
    }
  }

  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) return [];
    return JSON.parse(data).players;
  }
}

module.exports = PlayerService;