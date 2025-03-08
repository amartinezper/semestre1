do{
    let genero = prompt("Escriba su genero (masculino o femenino)")
let edad = prompt("Ingrese su edad")

function hola(genero,edad){
if(genero == "femenino" ){
   if (edad>50){
    ayuda = "$120000"
   } else if (edad>=30 ){
    ayuda = "$100000"
   } else if (edad <30){
    ayuda = "$0"
   }
  
}
if(genero=="masculino"){
    ayuda = "$40000"


}
return "El valor de ayuda mensual es: " + ayuda
}
alert(hola(genero,edad))


desea=prompt("Desea continuar(si o no)")
}while(desea==="si")
