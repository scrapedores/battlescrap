class Stats{
    name;
    move = "";
    attack_range = "";
    attack_mele = "";
    fuerza = "";
    resistencia = "";
    vidas = "";
    liderazgo = "";
    salvacion = "";
    numero_ataques = ""
    
    constructor (move,attack_mele,attack_range,fuerza,resistencia,vidas,liderazgo,salvacion,name,numero_ataques) {
        this.move =move;
        this.attack_mele = attack_mele;
        this.attack_range = attack_range;
        this.fuerza = fuerza;
        this.resistencia = resistencia;
        this.vidas = vidas;
        this.liderazgo = liderazgo;
        this.salvacion = salvacion; 
        this.name = name;
        this.numero_ataques = numero_ataques; 
    }
    get name() {
        return this.move;
    }
    set name(value) {
        this.name = name;
    }
    get move() {
        return this.move;
    }
    set move(value) {
        this.move = value;
    }
    get attack_range() {
        return this.attack_range;
    }
    set attack_range(value) {
        this.attack_range = value;
    }
    get attack_mele() {
        return this.attack_mele;
    }
    set attack_mele(value) {
        this.attack_mele = value;
    }
    get fuerza() {
        return this.fuerza;
    }
    set fuerza(value) {
        this.fuerza = value;
    }
    get resistencia() {
        return this.resistencia;
    }
    set resistencia(value) {
        this.resistencia = value;
    }
    get vidas() {
        return this.vidas;
    }
    set vidas(value) {
        this.vidas = value;
    }
    get liderazgo() {
        return this.liderazgo;
    }
    set liderazgo(value) {
        this.liderazgo = value;
    }

}
module.exports = Stats;
