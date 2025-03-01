
let hola = true

while(hola==true){
let tipo = prompt("Ingrese 1 para seleccionar una lavadora grande y 2 para una pequeña")
let cantidad = prompt("Ingrese la cantidad de lavadoras que desea alquilar")
let horas = prompt("Ingrese las horas que va a utilizar la/s lavadora/s")



if(tipo == 1){
    costo = (horas * 4000) * cantidad
    nueva = "grande"
    
}else if(tipo==2){
    costo = (horas * 3000)* cantidad
    nueva ="pequeña"
  
}

if(cantidad > 3){
    costo-(costo* 3/100)
}


alert("Costo total por alquilar "  +cantidad+ " lavadoras " + nueva + " por " + horas + " horas: $" + costo)


again = prompt("Quiere cotizar otra alquilada?")
if (again!="si"){
    hola=false
}
}



