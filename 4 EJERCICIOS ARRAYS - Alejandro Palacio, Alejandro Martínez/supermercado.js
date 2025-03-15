let cola = []
let x = 1
let mostrarclientes = ""
//Si la cola esta vacia, no se podran atender clientes pero se podran agregar
//Si la cola esta con gente, se pueden agregar y atender clientes
//Si la cola esta llena, se pueden atender clientes pero no agregar
function agregarcliente (){
    nombrecliente = prompt("Ingrese el nombre del cliente")
    cola.push(nombrecliente)
}

function mostrarcola (mostrarclientes){
    for (let i = 0; i < cola.length; i++) {
        mostrarclientes += cola[i] + ", "
    }
    alert(mostrarclientes)
}


do{
    if(cola.length != 0){
        decision = parseInt(prompt("Escriba 1 para agregar cliente y 2 para atender al primero de la fila"))
        if (decision == 1){
            if (cola.length > 6){
                alert("No puede agregar mas clientes, la cola se ve asi:")
                mostrarcola(mostrarclientes)
            }
            else{
                agregarcliente()
                mostrarcola(mostrarclientes)
            }
        }
        else if (decision == 2){
            alert( cola[0] + " Atendido, la nueva cola es: ")
            cola.shift()
            mostrarcola(mostrarclientes)
            
        }
    }else{
        alert("La cola esta vacia, por favor ingrese un cliente")
        agregarcliente()
    }
}while(x == 1)