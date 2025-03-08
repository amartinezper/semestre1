let nombre = prompt("Escriba su nombre")
let horas = parseInt(prompt("Ingrese el numero de horas que usted trabaja semanalmente"))

function hola(nombre,horas){
if (1 <= horas <= 10){
    salario = horas * 30000
    return "Señor/a " + nombre + " El numero de horas es "   +horas+  " y su salario equivale a " +salario
}else{
    salario = horas * 33000
    return "Señor/a " + nombre + " El numero de horas es "   +horas+  " y su salario equivale a " +salario
   
}
}
alert(hola(nombre,horas))