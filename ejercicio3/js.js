
const equipos = ["Alavés","Atl.Madrid","Villareal","Barcelona","Real Madrid","Getafe","Espayol","Málaga","Sevilla","Levante",
                 "Valencia","Betis","Celta","Atl.Bilbao","Real Sociedad","Rayo Vallecano","Osasuna","Mayorca","Cádiz","Granada"];

var pintar = quinielas(equipos);
console.table(pintar);
muestraDatos(equipos,pintar);

//Funciones
//Funcion que dependiendo de una variable aleatoria indica si gana el equipo 1, el 2 o hay empate(Simbolizado con la X).
function generarSimbolo(){
    var numero = Math.floor(Math.random() * 3);
    var devolver = '';
    switch(numero){
        case 0: devolver = 'X'; break;
        case 1: devolver = '1'; break;
        case 2: devolver = '2'; break;
    }
    return devolver;
}
//Muestra todos los equipos participantes en esta quiniela.
function muestraEquipos(equiposFuncion){
    var devolver = "";
    for(var i = 0;i<equiposFuncion.length;i++){
        if(i+1<equiposFuncion.length){
            devolver += equiposFuncion[i] + ", ";
        }else{
            devolver += equiposFuncion[i] + ".";
        }
    }
    return devolver;
}
//Genera todos los resultados de la tabla quiniela poniendo un NJ(no juegado) si el equipo coincide o lo que es lo mismo si la i y la j coincide
function generaResultados (quiniela){
    for(var i = 0;i<quiniela.length;i++){
        for(var j = 0;j<quiniela[i].length;j++){
            if(i!=0 && j!=0 && i!=j ){
                quiniela[i][j] = generarSimbolo();
            }
            if(i==j){
                quiniela[i][j]='NJ';
            }
        }
    }
    return quiniela;
}
//No pide esta funcion pero me resulta mas facil y mejor hacerlo con una funcion a parte.
function generarTabla(equiposParticipantes){
    var quiniela=new Array(equiposParticipantes.length);
    //Rellena el primer Array con todos los equipos de forma horizontal.
    for(var i = 1;i<quiniela.length;i++){
        quiniela[i] = new Array(20);
        quiniela[i][0] = equiposParticipantes[i];
    }
    //Crea el Array en la posicion 0 para hacer la barra horizontal de equipos.
    quiniela[0] = new Array(equiposParticipantes.length);
    //Rellena con el resto de los Arrays poniendo en la primera posicion los equipos de manera vertical.
    for(var i = 1;i<quiniela[0].length;i++){
      quiniela[0][i] = equiposParticipantes[i];
    }
    return quiniela;
}
function quinielas(equipos){
    console.log("Los equipos participantes son: " + muestraEquipos(equipos));
    var devolver = generarTabla(equipos);
    var ayuda = devolver;
    devolver = generaResultados(ayuda);
    return devolver;
}

//Muetra los datos de un partido suponiendo que el cliente es listo y lo pone bien y en el formato correcto,
//sino ignora la peticion y vuelve a preguntar por si el usuario quiere volver a preguntar por un resultado

/*L alogica de este metodo es que en funcion de los nombres de los equipos, va a obtener su posicion en 
el array con todos los equipos ya que su posicion coincide y a partir de ahi consulta el resultado y pone quien gano*/

//suponemos que el equipo 1 es el equipo vertical en la tabla y el equipo 2 el horizontal
function muestraDatos(equipos,quinielas){
    var respuesta = prompt("¿Quiere consultar algun resultado de un partido?");
    while(respuesta=="si"||respuesta=="SI"||respuesta=="Si"||respuesta=="sI"){
        var partido = prompt("Dime el partido con este formato = Equipo1-Equipo2");
        var equiposPartido = partido.split("-");
        var equipo1 = equiposPartido[0];
        var equipo2 = equiposPartido[1];
        var team1 = 0;
        var team2 = 0;
        for(var i = 0; i<equipos.length;i++){
            if(equipos[i] == equipo1){
                team1 = i;
            }
        }
        for(var i = 0; i<equipos.length;i++){
            if(equipos[i] == equipo2){
                team2 = i;
            }
        }
        var resultado = quinielas[team1][team2];
        switch(resultado){
            case 'X':alert("Han empatado");break;
            case '1':alert("Ha ganado el " + equipo1);break;
            case '2':alert("Ha ganado el " + equipo2);break;
            case 'NJ':alert("!COMO SE VA A JUGAR ESE PARTIDO SI ES EL MISMO EQUIPO¡");break;setInterval
        }
        respuesta = prompt("¿Quiere consultar algun otro resultado de otro partido?");
    }
}


