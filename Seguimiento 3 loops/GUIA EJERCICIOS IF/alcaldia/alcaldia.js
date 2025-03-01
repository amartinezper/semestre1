do{
    let genero = prompt("Escriba su genero (masculino o femenino)")
let edad = prompt("Ingrese su edad")

if(genero == "femenino" ){
   if (edad>50){
    ayuda = "$120000"
   } else if (edad>=30 ){
    ayuda = "$100000"
   } else if (edad <30){
    ayuda = "$0"
   }
   alert("El valor de ayuda mensual es: " + ayuda)
}

if(genero=="masculino"){
    ayuda = "$40000"

alert("El valor de ayuda mensual es: " + ayuda)
}
desea=prompt("Desea continuar(si o no)")
}while(desea==="si")
