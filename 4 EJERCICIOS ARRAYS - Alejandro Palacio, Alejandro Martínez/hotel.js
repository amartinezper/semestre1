function mostrarestado (){
    for (let i = 0; i < cuartos.length; i++) {
        estadoxd = cuartos[i]!=0? "ocupado":"vacio"
        habitacion = parseInt(i)+1
        hola ="Habitación: "+ habitacion + " "+ estadoxd+" "
        prin+= hola
    }
        // Pasa por cada elemento verificando si esta ocupado o libre para mostrarlo 
}
function liberar (numeroHabitacion){
    numeroHabitacion -= 1
    if(cuartos[numeroHabitacion]==1){
        liberar = prompt("Desea liberar esta habitación?")
        // Si el cuarto efectivamente esta ocupado, se le da la opcion de liberar
        if(liberar=="si"){
            cuartos[numeroHabitacion]=0
        }
    } else {
        alert("Esta habitación no esta ocupada")
    }
}
function todovacio (hola) {   
    if(hola.length==5){
        alert("No hay ninguna habitacion reservada")
        // verifica si por lo menos hay una habitacion reservada 
       }else {
        numeroHabitacion = parseInt(prompt("Cual es el numero de su habitacion? (1,2,3,4,5)"))
        if(numeroHabitacion <= 5 && numeroHabitacion > 0 && Number.isInteger(reservaHabitacion)){
            //verifica si la habitacion existe 
        liberar(numeroHabitacion)
        // le da la opcion de liberar 
    }
        else{
            alert("esa habitacion no existe")
        }
       }
}
function reservar (reservaHabitacion){
    reservaHabitacion -= 1
    if(cuartos[reservaHabitacion]==1){
        // verifica si la habitacion de ese numero esta reservada
        alert("esta habitacion ya esta reservada")
    }   else{
        cuartos[reservaHabitacion]=1
    }
}
function menu (estado){
    if (estado==1){
        hola = cuartos.filter(num=>num ==0)
        // selecciona cuales estan libres 
        todovacio(hola)
     }else if(estado ==2){
     reservaHabitacion = parseInt(prompt("que habitacion desea reservar?"))
     if(reservaHabitacion <= 5 && reservaHabitacion > 0 && Number.isInteger(reservaHabitacion)){
        // verifica si la habitacion existe
         reservar(reservaHabitacion)}
    else{
        alert("esa habitacion no existe")
    }         
     }else{
         alert("Esa opcion no esta disponible, seleccione 1 o 2 porfavor")
         // Garantiza que las opciones que se dan al momento de hacer "estado" si sean respetadas 
     }
}

let cuartos = [0,0,0,0,0]
prin=""
do{
 mostrarestado()   
 alert(prin)
 prin=""
estado = prompt("Seleccione 1 si tiene habitación o 2 si quiere separar una")
menu(estado)
mostrarestado()
alert(prin)
prin = ""
desea = prompt("Desea volver a ejecutar el programa?")
}while (desea=="si")

