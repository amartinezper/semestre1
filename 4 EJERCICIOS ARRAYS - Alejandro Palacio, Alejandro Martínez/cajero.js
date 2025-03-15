let total = null
let historial = []
printhistorial = ""
function versaldo(){
    if(total == 0){
        alert("usted no tiene ni dinero ni deudas en este momento, por favor deposite para averiguar su saldo")
    }
    else{
        alert("Usted tiene un total de "+ total)
    }
}
function retiros (){
    retiro = parseInt(prompt("Ingrese cuando desea retirar (maximo 500)"))

    if(retiro <= 500){
    retiro *= -1
    total += retiro
    historial.push(retiro)
    }
    else{
        alert("Error, su retiro es de mas de 500, deben ser menos de 500")
    }
}
function depositar(){
    deposito = parseInt(prompt("Ingrese cuanto desea depositar"))
        total += deposito
        historial.push(deposito)
}
function Mostrar(){
    for (let i = 0; i < historial.length; i++) {
        hola = historial[i] + " "
        printhistorial += hola
    }
    alert("El historial de sus ultimas transacciones es:"+ printhistorial + " ")
    printhistorial=""
}
do{
let opcion = parseInt(prompt("1 ver saldo, 2 para retirar, 3 para depositar o 4 para ver el historial"))
switch(opcion){
    case 1:
        versaldo()
        break;
     case 2:
       retiros()
       break;
        case 3:
        depositar()
        break;
        case 4:
        Mostrar()

}

if(historial.length >= 6){
    historial.shift()
}
desea = prompt("Desea ejecutar el programa otra vez")
}while(desea=="si")
