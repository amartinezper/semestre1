let p1 = 0
p2 = 0
p3 = 0
p4 = 0


let x = window.prompt("Quiere el jugador 1 tomar? (si o no)");
let y = window.prompt("Quiere el jugador 2 tomar? (si o no)");
let z = window.prompt("Quiere el jugador 1 tomar otra carta? (si o no)");
let w = window.prompt("Quiere el jugador 2 tomar otra carta? (si o no)");

if (x === "si") p1 += Math.floor(Math.random() * 10) + 1;
if (y === "si") p2 += Math.floor(Math.random() * 10) + 1;
if (z === "si") p3 += Math.floor(Math.random() * 10) + 1;
if (w === "si") p4 += Math.floor(Math.random() * 10) + 1;

let cartasOcultasJ1 = Math.floor(Math.random() * 10) + 1;
let cartasOcultasJ2 = Math.floor(Math.random() * 10) + 1;

let cartasTotalJ1 = p1 + p3;
let cartasTotalJ2 = p2 + p4;

alert("El total de cartas del jugador 1 es: " + cartasTotalJ1);
let respuestaJ1 = prompt("¿Quieres continuar? Escribe 'Si' para continuar");


alert("El total de cartas del jugador 2 es: " + cartasTotalJ2);
let respuestaJ2 = prompt("¿Quieres continuar? Escribe 'Si' para continuar");

if (respuestaJ1 === "si") {
    alert("Tu tercera carta es: " + cartasOcultasJ1);
    cartasTotalJ1 += cartasOcultasJ1;
}

if (respuestaJ2 === "si") {
    alert("Tu tercera carta es: " + cartasOcultasJ2);
    cartasTotalJ2 += cartasOcultasJ2;
}

alert("Puntaje final del jugador 1: " + cartasTotalJ1);
alert("Puntaje final del jugador 2: " + cartasTotalJ2);

if ((cartasTotalJ1 > 21 && cartasTotalJ2 > 21) || cartasTotalJ1 === cartasTotalJ2) {
    alert("Empate");
} else if (cartasTotalJ1 > 21) {
    alert("Jugador 2 gana");
} else if (cartasTotalJ2 > 21 || cartasTotalJ1 > cartasTotalJ2) {
    alert("Jugador 1 gana");
} else {
    alert("Jugador 2 gana");
}