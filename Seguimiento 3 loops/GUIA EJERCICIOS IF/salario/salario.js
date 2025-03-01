do{
let nombre = prompt("Escriba su nombre")
let horas = parseInt(prompt("Ingrese el numero de horas que usted trabaja semanalmente"))

if (1 <= horas <= 10){
    salario = horas * 30000
    alert("Señor/a " + nombre + " El numero de horas es "   +horas+  " y su salario equivale a " +salario)
}else{
    salario = horas * 33000
    alert("Señor/a " + nombre + " El numero de horas es "   +horas+  " y su salario equivale a " +salario)
   
}
desea=prompt("Desea averiguar otro salario? (si o no)")
}while(desea=="si")