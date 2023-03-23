class Player {

  constructor(name, abilities, stats, weapons, psychicPowers, psykers) {
    this._name = name;
    this._abilities = abilities;
    this._stats = stats;
    this._weapons = weapons;
    this._psychicPowers = psychicPowers;
    this._psykers = psykers;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get abilities() {
    return this._abilities;
  }
  set abilities(abilities) {
    this._abilities = abilities;
  }

  get stats() {
    return this._stats;
  }

  set stats(newStats) {
    this._stats = newStats;
  }

  get weapons() {
    return this._weapons;
  }

  set weapons(newWeapons) {
    this._weapons = newWeapons;
  }

  get psychicPowers() {
    return this._psychicPowers;
  }

  set psychicPowers(newPsychicPowers) {
    this._psychicPowers = newPsychicPowers;
  }

  get psykers() {
    return this._psykers;
  }

  set psykers(newPsykers) {
    this._psykers = newPsykers;
  }
}
module.exports = Player;