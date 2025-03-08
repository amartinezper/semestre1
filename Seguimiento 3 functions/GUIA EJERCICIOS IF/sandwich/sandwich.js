let tamaño = prompt("Seleccione 1 para elegir grande o 2 para pequeño")
let extra1 = prompt("Quiere tocineta?")
let extra2 = prompt("Quiere jalapeño?")
let extra3 = prompt("Quiere pavo?")
let extra4 = prompt("Quiere queso?")
function hola(tamaño,extra1,extra3,extra4){
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
return "El precio de su  sandwich es: " + sand
}
alert(hola(tamaño,extra1,extra3,extra4))