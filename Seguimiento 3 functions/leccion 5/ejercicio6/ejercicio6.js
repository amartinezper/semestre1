let ttt=0
do{
let rest = parseInt(prompt("Ingrese 1 para ordenar hamburguesas, 2 para pizza y 3 para comida china"))
let tiempo = prompt("Los envios se demoran de 45min a 1h, quiere seguir? (si o no)")
function hola(tiempo,rest){
if(tiempo=="si"){
    switch(rest){
        case 1:
            alert("MENU  DEL DIA: HAMBURGUESA SIMPLE $25000 / HAMBURGUESA ESPECIAL $30000 / HAMBURGUESA VEGANA $20000")
            simp = parseInt(prompt("Cuantas hamburguesas simples desea?"))
            esp = parseInt(prompt("Cuantas hamburguesas especiales desea?"))
            veg = parseInt(prompt("Cuantas hamburguesas veganas desea?"))
            total=25000*simp + 30000*esp + 20000*veg + 5000
            alert("Usted ordeno" + simp + " hamburguesas simples" + esp + " hamburguesas especiales y " + veg + " hamburguesas veganas")
            alert("Su total es "+ total)
            ttt+=total
            break;

            case 2:
                alert("MENU  DEL DIA: PIZZA PERSONAL $20000 / PIZZA MEDIANA $30000 / PIZZA FAMILIAR $50000")
                pers = parseInt(prompt("Cuantas pizzas personales desea?"))
                med = parseInt(prompt("Cuantas pizzas medianas desea?"))
                fam = parseInt(prompt("Cuantas pizzas familiares desea?"))
                total=20000*pers + 30000*med + 50000*fam + 5000 
                alert("Usted ordeno "+ pers+" pizzas personales, "+ med + " pizzas medianas y "+ fam + " pizzas familiares")
                alert("Su total es "+ total)
                ttt+=total
                break;      
            case 3:
            alert("MENU  DEL DIA: UNA CAJA DE ARROZ $60000 / MEDIA CAJA DE ARROZ $40000 / PORCION DE FIDEOS $25000")
            caj = parseInt(prompt("Cuantas cajas de arroz desea?"))
            media = parseInt(prompt("Cuantas medias cajas de arroz desea?"))
            fid = parseInt(prompt("Cuantas porciones de fideos desea?"))
            total=60000*caj + 40000*media + 25000*fid + 5000
            alert("Usted ordeno" + caj + " cajas de arroz " + media + " medias cajas de arroz y " + fid + " porciones de fideos")
            alert("Su total es "+ total)
            ttt+=total
            break;
    }
}
return "Su total es: " + ttt

  

}
alert(hola(tiempo,rest))
desea=prompt("Quiere seguir haciendo pedidos?")

}while(desea=="si")
pago = parseInt(prompt("Presione 1 si quiere pagar por tarjeta, 2 para efectivo y 3 para transferencia"))
function chao (pago){
if(pago==3){
    
    return "El numero de trasferencia es 298994523, Pedido confirmado"
    
}else{
    return "Pedido confirmado"
}
}
alert(chao(pago))