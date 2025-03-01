let total=0
do{
alert("Ofrecemos lavado o secado o planchado")
alert("Por proceso solo se permiten 20 prendas")
let num = parseInt(prompt("Ingrese el numero de prendas"))

if (num >20){
    alert("Error en el proceso")
}else {
    lav = prompt("Quiere lavar?")
    sec = prompt("Quiere secar?")
    pla = prompt("Quiere planchar?")

    precio = 0

    if (lav == "si"){
        precio += 2000
        lava = Math.floor(Math.random()*10)+1 
        alert("Utilize la lavadora numero "+lava)
    }

    if(sec=="si"){
        precio += 2000
        seca = Math.floor(Math.random()*10)+1 
        alert("Utilize la secadora numero "+seca)
    }

    if(pla =="si"){
        precio += 4000
        plancha = Math.floor(Math.random()*10)+1
        alert("Utilize la plancha numero "+plancha)
    }
}
alert("El total a pagar es "+ precio)
total+=precio
alert("Su total es: "+ total)
desea=prompt("Desea pedir otro servicio (si o no)")
}while(desea=="si")






