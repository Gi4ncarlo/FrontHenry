function laCajaDePandora(numero){
  const esNumPar = numero % 2 === 0;
  if (esNumPar) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
    }

function Giancarlo(){

    Giancarlo = {
        nombre : "Giancarlo",
        edad : "23",
        nacionalidad : "Argentina",
    }

    return Giancarlo;
}

function Ignacio(){
        return {
          nombre: "Ignacio",
          edad: 20, 
          nacionalidad: "Uruguay",
        };
}
