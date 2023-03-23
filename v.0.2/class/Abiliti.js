class Abiliti {

    constructor(name,descripcion,ref){
    this._name = name;
    this._descripcion = descripcion;
    this._ref = ref;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(value) {
        this._descripcion = value;
    }
 
    get ref() {
        return this._ref;
    }
    set ref(value) {
        this._ref = value;
    }
}
module.exports = Abiliti;