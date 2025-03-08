
let angu1 = parseInt(prompt("Ingrese el primer angulo"))
let angu2 = parseInt(prompt("Ingrese el segundo angulo"))
let angu3 = parseInt(prompt("Ingrese el tercero angulo"))
function hola(angu1,angu2,angu3){
if ((angu1 + angu2 + angu3) === 180){
    return "Triangulo valido"
}else{
    return "Triangulo invalido"
} 
}
alert(hola(angu1,angu2,angu3))