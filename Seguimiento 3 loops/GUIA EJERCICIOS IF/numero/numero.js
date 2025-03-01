do{
numero = parseInt(prompt("Ingrese un numero"))
if (numero%2 ===0){
    alert("Este numero es par")
}else{
    alert("Este numero es impar")
}
desea=prompt("Desea elegir otro numero? (si o no)")
}while(desea=="si")