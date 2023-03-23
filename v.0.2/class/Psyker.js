class Psyker {
    constructor(name, cast, deny, powers, conoce, ref, other) {
      this._name = name;
      this._cast = cast;
      this._deny = deny;
      this._powers = powers;
      this._conoce = conoce;
      this._other = other;
      this._ref = ref;
      
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = newName;
    }
  
    get cast() {
      return this._cast;
    }
  
    set cast(newCast) {
      this._cast = newCast;
    }
  
    get deny() {
      return this._deny;
    }
  
    set deny(newDeny) {
      this._deny = newDeny;
    }
  
    get powers() {
      return this._powers;
    }
  
    set powers(newPowers) {
      this._powers = newPowers;
    }
  
    get conoce() {
      return this._conoce;
    }
  
    set conoce(newConoce) {
      this._conoce = newConoce;
    }

    get other() {
      return this._other;
    }
  
    set other(other) {
      this._other = other;
    }

    get ref() {
      return this._name;
    }
  
    set ref(ref) {
      this._ref= ref;
    }
  }
  
  module.exports = Psyker;
  