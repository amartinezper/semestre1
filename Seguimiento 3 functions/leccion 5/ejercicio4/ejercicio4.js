let ttt=0
do{


let modelo = parseInt(prompt("Escoja 1 para escoger escoba dura, 2 para suave y 3 para cepillo"))
let cerd = parseInt(prompt("Escoja 1 para cerdas sinteticas y 2 para naturales"))
let opci1 = parseInt(prompt("Escoja 1 para mango largo o 2 para gancho en punta o 3 si ninguna"))
let opci2 = parseInt(prompt("Escoja 1 para entrega extra rapida o 2 si no"))
let cantidad = parseInt(prompt("Cuantas escobas quiere de este tipo? (mas de 3 y menos de 30)"))

function hola (modelo,cerd,opci1,opci2,cantidad){
if(modelo == 1 && cerd == 1){
    precio = 8000
}else if(modelo == 1 && cerd == 2){
    precio = 10000
}else if(modelo ==3 && cerd==1){
    precio=12000
}else if (modelo==3 && cerd==2){
    precio=15000
}else if(modelo==2 && cerd==1){
    precio =9000
}else if(modelo==2 &&cerd ==2){
    precio=13000
}

if(opci1==1){
    precio += 2000
}else if (opci1==2){
    precio+=500
}



if (cantidad>3 && cantidad<30){
    precio *= cantidad
}




if(opci2==1){
    precio+=5000
}

return "El total a pagar es " + precio
}
alert(hola (modelo,cerd,opci1,opci2,cantidad))
ttt+=precio
alert("Su total es: "+ ttt)
desea=prompt("Desea hacer otro encargo? (si o no)")

}while(desea=="si")