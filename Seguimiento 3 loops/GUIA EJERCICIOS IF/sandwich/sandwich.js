let sandtotal=0
do{
let tamaño = prompt("Seleccione 1 para elegir grande o 2 para pequeño")
let extra1 = prompt("Quiere tocineta?")
let extra2 = prompt("Quiere jalapeño?")
let extra3 = prompt("Quiere pavo?")
let extra4 = prompt("Quiere queso?")

if (tamaño == 1){
    sand = 12000
    if (extra1 == "si"){
        sand += 3000
    }
    if (extra3 =="si"){
        sand += 3000
    }
    if (extra4 == "si"){
        sand+=2500
    }
}else if (tamaño == 2){
    sand = 6000
    if (extra1 == "si"){
        sand += 3000
    }
    if (extra3 =="si"){
        sand += 3000
    }
    if (extra4 == "si"){
        sand+=2500
    }
}
alert("El precio de su  sandwich es: " + sand)
sandtotal+= sand
alert("Su total es: "+ sandtotal)
desea=prompt("Desea pedir otro? (si o no)")
}while(desea=="si")