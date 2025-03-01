let p1 = 0
p2 = 0
p3 = 0
p4 = 0
do{
x = window.prompt("Quiere el jugador 1 tomar? (si o no)");
if (x === "si") p1 += Math.floor(Math.random() * 10) + 1;
alert("El total de cartas del jugador 1 es: " + p1);
respuestaJ1 = prompt("¿Quieres continuar? Escribe 'Si' para continuar");


y = window.prompt("Quiere el jugador 2 tomar? (si o no)");
if (y === "si") p2 += Math.floor(Math.random() * 10) + 1;
alert("El total de cartas del jugador 2 es: " + p2);
respuestaJ2 = prompt("¿Quieres continuar? Escribe 'Si' para continuar");
}while(respuestaJ1=="si" || respuestaJ2=="si")
    
alert("Puntaje final del jugador 1: " + p1);
alert("Puntaje final del jugador 2: " + p2);

if ((p1 > 21 && p2 > 21) || p1 === p2) {
    alert("Empate");
} else if (p1 > 21) {
    alert("Jugador 2 gana");
} else if (p2 > 21 || p1 > p2) {
    alert("Jugador 1 gana");
} else {
    alert("Jugador 2 gana");
}








