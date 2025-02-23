let piti = prompt("Su computadora emite un pitido? (si o no)")
let discgiro = prompt("El disco duro de su computadora gira? (si o no)")
let unigiro = prompt("La unidad de su computadora gira?")

if (piti == "si" && discgiro=="si" && unigiro=="no"){
    alert("Su computadora esta averiada")
} else if(piti == "si" && discgiro=="no" && unigiro=="si"){
    alert("Pongase en contacto con el tecnico apoyo")
}else if (piti == "si" && discgiro=="no" && unigiro=="no"){
    alert("Verificar contactos de unidad")
}else if (piti == "no" && discgiro=="no" && unigiro=="no"){
    alert("Traiga la computadora para mostrarla en la central")
}else if(piti == "no" && discgiro=="si" && unigiro=="no"){
    alert("Compruebe las conexiones de altavoces")
}