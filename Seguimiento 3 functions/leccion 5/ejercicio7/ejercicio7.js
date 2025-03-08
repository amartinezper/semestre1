alert("Bienvenido a la pagina de venta de boletas de el concierto")
alert("Contamos con 3 localidades: General: 50000$, Preferencial 150000$ y VIP 300000$")
alert("Aparte del precio fijo de la boleta contamos con 10% adicionales de impuestos y 5000 de servicio")

let ttt=0
do{
let loca = parseInt(prompt("Ingrese 1 para elegir la localidad general, 2 preferencial y 3 VIP"))
let canti = parseInt(prompt("Cuantas boletas quiere? (maximo 5)"))
let hola= 5000*canti
function hol(loca,canti,hola){
if(canti>5){
    return "Error, limite de boletas es 5"
}else if(canti<5){
    switch(loca){
        case 1:
            canti*=50000
            break;

        case 2:
            canti*=150000
            break;

        case 3:
            canti*=300000
            break;    
    }
    let total=canti+(canti*0.1)+hola
    alert(`Su total es ${total}`)
    ttt+=total
}
return "Su total es: "+ ttt
}
alert(hol(loca,canti,hola))
desea=prompt("Desea comprar más boletas? (si o no)")
}while(desea=="si")