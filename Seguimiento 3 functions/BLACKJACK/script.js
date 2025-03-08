let p1 = 0
p2 = 0
p3 = 0
p4 = 0
let x = window.prompt("Quiere el jugador 1 tomar? (si o no)");
let z = window.prompt("Quiere el jugador 1 tomar otra carta? (si o no)");
let y = window.prompt("Quiere el jugador 2 tomar? (si o no)");
let w = window.prompt("Quiere el jugador 2 tomar otra carta? (si o no)");

let cartasOcultasJ1 = Math.floor(Math.random() * 10) + 1;
let cartasOcultasJ2 = Math.floor(Math.random() * 10) + 1;
function hola(x,z){
    if (x === "si") p1 += Math.floor(Math.random() * 10) + 1;
    if (z === "si") p3 += Math.floor(Math.random() * 10) + 1;
    total1=p1 + p3
    return total1 ;
   
}

function chao(y,w){
    if (y === "si") p2 += Math.floor(Math.random() * 10) + 1;
    if (w === "si") p4 += Math.floor(Math.random() * 10) + 1;
    total2=p2 + p4
    return total2
}


alert("El total de cartas del jugador 1 es: " + hola(x,z));
respuestaJ1 = prompt("¿Quieres continuar? Escribe 'Si' para continuar");

alert("El total de cartas del jugador 2 es: " + chao(y,w));
let respuestaJ2 = prompt("¿Quieres continuar? Escribe 'Si' para continuar");


function hello(respuestaJ1){
    if (respuestaJ1 === "si") {
        alert("Tu tercera carta es: " + cartasOcultasJ1);
        total1 += cartasOcultasJ1;
    }
    return total1
}
hello(respuestaJ1)

function bye(respuestaJ2){
if (respuestaJ2 === "si") {
    alert("Tu tercera carta es: " + cartasOcultasJ2);
    total2 += cartasOcultasJ2;
}
return total2
}
bye(respuestaJ2)

alert("Puntaje final del jugador 1: " + total1 );
alert("Puntaje final del jugador 2  " + total2 )

if ((total1 > 21 && total2 > 21) || total1 === total2) {
    alert("Empate");
} else if (total1 > 21) {
    alert("Jugador 2 gana");
} else if (total2 > 21 || total1 > total) {
    alert("Jugador 1 gana");
} else {
    alert("Jugador 2 gana");
}