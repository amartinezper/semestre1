let hola = []
function escoger(){
    atencionTipo = parseInt(prompt("Presione 1 para atención por llamada telefonica, 2 para asesoria, 3 para cambiar una asesoria por una atencion telefonica o 4 para ver la cantidad de estudiantes"))

    
if (atencionTipo == 2){
    ident = prompt("Ingrese su numero de cedula")
    if(hola.every(x => x.id != ident)){
    asesoriatipo = parseInt(prompt("Presione 1 para directivo, 2 para estudiante"))
    if (asesoriatipo == 1){
        objeto = {
            id: ident,
            atencion: "Asesoria",
            tipo: "Directivo"  
        }
        hola.push(objeto)
     }else if(asesoriatipo == 2){
        objeto = {
            id: ident,
            atencion: "Asesoria",
            tipo: "Estudiante"  
        }
        hola.push(objeto)
    }
    }else{
        alert("Este id ya esta ingresado")
    }
}else if(atencionTipo == 1){
        ident = prompt("Ingrese su numero de cedula")
        if(hola.every(x => x.id != ident)){
        objeto = {
            id: ident,
            atencion: "Telefonica",  
        }
        hola.push(objeto)
        }else{
            alert("El id que ingreso ya esta registrado")
        }
    }
    
    

    trans()
    contar()
}
function trans(){
    if(atencionTipo==3){
    idbuscar = parseInt(prompt("Ingrese su id de una atencion por asesoria que desee cambiar"))
    estar = hola.filter(x=>x.id = idbuscar)
    encontar = hola.findIndex(x=> x== estar)
    if (estar == undefined){
        alert("Este id no esta registrado")
    }else{
        
        objeto = {
            id: idbuscar,
            atencion: "Telefonica" 
        }
        hola.splice(encontar,1,objeto)
    }
}
}
function contar(){
if(atencionTipo==4){
    alert("La cantidad total de personas en fila es de "+ hola.length)
    tipo1 = hola.filter(x => x.atencion == "Telefonica").length
    tipo2 = hola.filter(x =>  x.tipo == "Estudiante").length
    tipo3 = hola.filter(x =>  x.tipo == "Directivo").length
    alert("Hay "+ tipo1 + " de Telefonia" +
        "\n Hay "+ tipo2 + " de asesoria con estudiante" +
        "\n Hay "+ tipo3 + " de asesoria con directivo"
    )
}
}

do{
escoger()

desea = prompt("Desea volver a ejecutar?")
}while(desea == "si")