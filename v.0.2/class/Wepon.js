class Wepon {
    constructor(weapon, rang, type, fuerza, penetracion, _damage, abilities, ref) {
      this._weapon = weapon;
      this._rang = rang;
      this._type = type;
      this._fuerza = fuerza;
      this._penetracion = penetracion;
      this._damage = _damage;
      this._abilities = abilities;
      this._ref = ref;
    }
  
    get weapon() {
      return this._weapon;
    }
  
    set weapon(value) {
      this._weapon = value;
    }
  
    get rang() {
      return this._rang;
    }
  
    set rang(value) {
      this._rang = value;
    }
  
    get type() {
      return this._type;
    }
  
    set type(value) {
      this._type = value;
    }
  
    get fuerza() {
      return this._fuerza;
    }
  
    set fuerza(value) {
      this._fuerza = value;
    }
  
    get penetracion() {
      return this._penetracion;
    }
  
    set penetracion(value) {
      this._penetracion = value;
    }
  
    get damage() {
      return this._damage;
    }
  
    set damage(value) {
      this._damage = value;
    }
  
    get abilities() {
      return this._abilities;
    }
  
    set abilities(value) {
      this._abilities = value;
    }
  
    get ref() {
      return this._ref;
    }
  
    set ref(value) {
      this._ref = value;
    }
  }
  module.exports = Wepon;