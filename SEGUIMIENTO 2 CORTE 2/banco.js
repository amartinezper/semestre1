let cola = []
let turno = 22
let totalclientes = 0
function tomarturno(){
    nombre = prompt("Ingrese su nombre: ")
    clientes = {
        name: nombre,
        turn: turno
    }
    cola.push(clientes)
    turno ++
    
}
function atendercliente(){
    if (cola.length > 0){
    alert("Llamando al turno  "+ cola[0].turn)
    cola.shift()
    totalclientes ++
}else {
    alert("NO hay clientes")
}

}

alert("Bienvenido al sistema de banco de Calarca")
tomarturno()
do{
    pregunta = parseInt(prompt("1. Atender un cliente \
        2. Mostrar la cola \
        3. Tomar turno"))
    switch(pregunta){
        case 1: 
        atendercliente() 
        break;
        case 2:
            if(cola.length > 0 ){
            cola.forEach(x=>alert(JSON.stringify(x,null,2)))
            }else{
                alert("No hay clientes para mostrar en la cola")
            }
            break;
        case 3:
            tomarturno()
            break;
        default: 
        alert("error, ingreso una opcion no valida")
        break;
    }
repetir = prompt("desea repetir?")

}while(repetir  == "si")
