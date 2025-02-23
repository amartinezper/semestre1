print("0 - 499 copias $120 por copia, 500 - 749 copias $ 100 por copia, 750 - 999 copias $ 80 por copia, 1000 copias o más $ 50 por copia")
let papel = parseInt(prompt("Ingresa el numero de impresiones que quieres sacar"))

if(papel <500){
    precio = papel*120
}else if(papel<750){
    precio = papel * 100
}else if(papel<1000){
    precio=papel*80
}else if(papel>=1000) {
    precio=papel*50
}

alert("Segun la cantidad de copias que pidio, tiene que pagar: " + precio)