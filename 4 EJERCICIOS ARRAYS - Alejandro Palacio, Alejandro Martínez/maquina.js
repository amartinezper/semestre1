
let stock = [0,0,3,4,6]
let precios = [5,2,3,7,1]
let nombres =["cheetos","agua","te","ponque","bonbon"]
// cheetos, agua, te, ponque, bonbon
function metermoneda(){
    do{
    repetir = prompt("usted tiene "+ dinerototal +" ingresado en la maquina, desea añadir una moneda? si/no")
    if(repetir == "si"){
    dinerototal+=1
    alert("Su nuevo balance es de "+ dinerototal)
}
    }while (repetir == "si")
}
function mostrarmaquina(stock,precios,nombres){        
    alert("Producto 1: Tenemos "+ stock[0]+" unidad/es de "+ nombres[0] +" por tan solo "+ precios[0] +" monedas" +
        "\nProducto 2: Tenemos "+ stock[1]+" unidad/es de "+ nombres[1] +" por tan solo "+ precios[1] + " monedas" +
        "\nProducto 3: Tenemos "+ stock[2]+" unidad/es de "+ nombres[2] +" por tan solo "+ precios[2] + " monedas" +
        "\nProducto 4: Tenemos "+ stock[3]+" unidad/es de "+ nombres[3] +" por tan solo "+ precios[3] + " monedas" +
        "\nProducto 5: Tenemos "+ stock[4]+" unidad/es de "+ nombres[4] +" por tan solo "+ precios[4] +" monedas")
    }

function compra(dinerototal){
    mostrarmaquina(stock,precios,nombres)
    producto = parseInt(prompt("Elija el numero del producto que quiere, su total de dinero es de:"+ dinerototal))
   if(producto >=1 && producto <=5){
    idproducto = producto - 1
    if(stock[idproducto] <= 0){
    haystock(idproducto)}
    else{
    if(dinerototal< precios[idproducto]){
        alert("No le alcanza, ingrese mas monedas")
    }
    else{
        stock[idproducto] -= 1
        alert("Usted compro exitosamente "+ nombres[idproducto])
        dinerototal-= precios[idproducto]
        alert("Su devuelta es de "+ dinerototal)
    }
}
}else{
    alert("Ese producto no existe")
}
    
}

function haystock(idproducto){
        if(stock[idproducto]<1){
            alert("Este producto esta agotado ")
            recomendar()
        }
}

function recomendar (){
    for (let index = 0; index < stock.length; index++) {
        if(stock[index] > 0){
            alert("Se le recomienda el producto: "+ nombres[index] +" de el cual si tenemos existencias")
            break;
        }
        
    }
}
do{
    dinerototal= 0
metermoneda()
compra(dinerototal)

desea = prompt("Quiere volver a comprar? (si o no)")
}while(desea=="si")

