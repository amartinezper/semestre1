do{
    let operador = prompt("Ingrese su operador (claro, tigo o movistar)")
let min = parseInt(prompt("Ingrese cuantos minutos internacionales utilizo"))

if(operador == "claro"){
    cobro = 30000 + min*100 + 18000
}else if(operador=="tigo"){
    cobro = 45000 + min*200 + 12000
}else if(operador=="movistar"){
    cobro= 40000 + min*250 + 8000
}
alert("El cobro correspondiente a "+ operador + " teniendo en cuenta sus minutos internacionales es de: "+ cobro)
desea=prompt("Desea cotizar otro uso? (si o no)")
}while(desea=="si")