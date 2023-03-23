class PsychicPower {
    constructor(nombre, carga, range, detalles, ref) {
      this._nombre = nombre;
      this._carga = carga;
      this._range = range;
      this._detalles = detalles;
      this._ref = ref;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get carga() {
      return this._carga;
    }
  
    set carga(nuevaCarga) {
      this._carga = nuevaCarga;
    }
  
    get range() {
      return this._range;
    }
  
    set range(nuevoRange) {
      this._range = nuevoRange;
    }
  
    get detalles() {
      return this._detalles;
    }
  
    set detalles(nuevosDetalles) {
      this._detalles = nuevosDetalles;
    }
  
    get ref() {
      return this._ref;
    }
  
    set ref(nuevoRef) {
      this._ref = nuevoRef;
    }
  }
module.exports = PsychicPower;  