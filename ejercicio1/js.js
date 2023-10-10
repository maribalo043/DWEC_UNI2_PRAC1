var texto = prompt("Pon una frase que quieras");
var separador = prompt("Indica el separador que quieres usar\n si pones 1 indicas que quieres usar los espacios");
if(separador =="1"){
    separador = ' ';
}
//Metemos el resueltado de las funciones en variables para guardar los datos
//por si quisiesemos usarlos mas tarde.
var textoInvertido = giraPalabras(texto);
var pintar = separarPalabras(texto,separador); 
alert(textoInvertido);
//Funciones
function separarPalabras(entrada,separador){
    var devolver = [];
    devolver = entrada.split(separador);
    return devolver;
}
//el split sirve para separar la cadena, el reverse para invertir el orden
//y el join para volver a juntarlos en una unica variable.
function giraPalabras(oracion){
    var devolver = oracion.split('').reverse().join('');
    return devolver;
}