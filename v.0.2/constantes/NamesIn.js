class NamesIn {
   static MOVIMIENTO = "M";
   static ATAQUE_MELE = "WS";
   static ATAQUE_DISTACIA = "";
   static FUERZA = "S"
   static RESISTENCIA = "T";
   static VIDAS = "W";
   static ATAQUES = "A";
   static LIDERAZGO = "Ld";
   static SALVACION = "Save";
    
    constructor(){
        this.MOVIMIENTO = MOVIMIENTO;
        this.ATAQUE_MELE = ATAQUE_MELE;
        this.FUERZA = FUERZA;
        this.RESISTENCIA = RESISTENCIA;
        this.VIDAS = VIDAS;
        this.ATAQUES = ATAQUES;
        this.ATAQUE_DISTACIA = ATAQUE_DISTACIA;
        this.LIDERAZGO = LIDERAZGO;
        this.SALVACION = SALVACION;
    }
    
}
module.exports = NamesIn;
