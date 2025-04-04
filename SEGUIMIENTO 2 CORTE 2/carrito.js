let total2 = 0
let totalstock = 0
let carrito = []
let productos = [
    {
        nombre: "jugo",
        precio: 10,
        stock: 5
    },
    {
        nombre: "papas",
        precio: 15,
        stock: 4
    },
    {
        nombre: "agua",
        precio: 7,
        stock: 8
    },
    {
        nombre: "paleta",
        precio: 4,
        stock: 3
    },
    {
        nombre: "brownie",
        precio: 14,
        stock: 3
    }
]
function agregarcarrito (){
    productoagregar = (prompt("Ingrese el nombre del producto que desea, tenemos disponible: jugo, papas, agua, paleta o brownie")).toLowerCase()

    productocarrito = productos.filter(x => x.nombre == productoagregar)
    posicion = productos.findIndex(x=>x==productocarrito[0])
    if(productos.some(x=>x.nombre==productoagregar)){
    if(productos[posicion].stock > 0){
    carrito.push(productocarrito[0].nombre)
    productos[posicion].stock -= 1
    alert("Usted agrego "+ productoagregar +" a su carrito")}
    else{
        alert("Ya no tenemos stock de este producto")
    }
}else{
    alert("Ese producto no existe")
}
}
function vercarrito(){
    calculartotal()
    alert("Usted tiene en el carro: "+ carrito +" y tiene un costo total de "+ totalcarrito)
}
function calculartotal(){
    total2 = 0
    for (let index = 0; index < productos.length; index++) {
        total2 += productos[index].stock * productos[index].precio
     }
     
     totalcarrito = totalstock - total2
}
function sacarcarrito(){
    vercarrito()
    sacar = (prompt("Que producto quiere retirar de su carrito")).toLowerCase()
    if(carrito.some(x=>x ==sacar)){
        carrito.splice(carrito.findIndex(x=>x==sacar),1)
        productos[productos.findIndex(y=> y == (productos.filter(x=>x.nombre==sacar)[0]))].stock++
    }else{
        alert("Este producto no esta en su carrito")
    }
}
for (let index = 0; index < productos.length; index++) {
    totalstock += productos[index].stock * productos[index].precio
     
 }
do{
    alert("lista de precios "+
        "\n jugo: 10 "+
        "\n papas: 15 "+
        "\n agua: 7 "+
        "\n paleta: 4 "+
        "\n brownie: 14 "
  )
camino = parseInt(prompt("Seleccione 1 para agregar productos al carrito, 2 para retirar del carrito o 3 para ver su carrito"))
if (camino == 1){
agregarcarrito()
vercarrito()
}else if(camino==2){
    sacarcarrito()
}else if(camino==3){
    vercarrito()
}else{
    alert("Tiene que seleccionar 1 o 2")
}
repetir = prompt("Desea dejar de comprar?")
}while(repetir != "si")
alert("Su total a pagar es "+ totalcarrito)
pago = prompt("Desea pagar por tarjeta o efectivo")
if(pago==tarjeta){
    alert("Acerque la tarjeta al datafono")
    alert("Su compra de "+ totalcarrito + " fue efectiva")
}else if (pago==efectivo){
    alert("Fue completada su compra de "+ totalcarrito)
}