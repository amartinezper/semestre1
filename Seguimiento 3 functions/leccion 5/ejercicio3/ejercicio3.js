alert("En nuestra tienda ofrecemos pares clasicos, running y basketball")
alert("Solo tenemos tallas desde 35 a 44")
let num = parseInt(prompt("Cuantos pares quiere (maximo 5 por transacción)"))
let ttt=0
function hola1(num){
for(i=1;i<=num;i++){
    tipo1 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
    talla1 = prompt("Escriba la talla que quiere")
    
    switch(tipo1){
        case 1:
             t1=500000
             
            break;

        case 2:
            t1=800000
            
            break;

        case 3:
            t1=1000000
            
            break;
    }
    
    ttt+=t1

        
    }
    return"El precio de su compra es: " + ttt
}
    if (talla1 <35 || talla1>44){
        alert("Error, talla no disponible")
        console.error();
    }
alert(hola1(num))

   
