var maximo = 99999;
var minimo = 0;
var numero = prompt("Dame un numero entre 99999 y 0, ambos incluidos");
var decimosIniciales = [];
while((numero>99999) && (numero<0)){
    numero = prompt("Dame un numero entre 0 y 99999, sino muere <3");
}
generarNAleatorios(minimo,maximo,numero);

let intentos = 0;
let coincidencia = false;

while (!coincidencia && intentos < 999999) {
  const numeroAleatorio = generaAleatorio(0, 99999);
  intentos++;

  if (decimosIniciales.includes(numeroAleatorio)) {
    coincidencia = true;
  }
}

if (coincidencia) {
  alert("¡Felicidades! Se ha encontrado una coincidencia después de " + intentos + " intentos.");
} else {
  alert("No se encontró una coincidencia después de 999999 intentos.");
}


function generaAleatorio(min, max) {
    return  Math.round(Math.random() * (max - min + 1) + min);
}

function generarNAleatorios(min,max,cantidad){
    for(var i = 0;i<=cantidad;i++){
       decimosIniciales[i] = generaAleatorio(min,max);
    }
}

