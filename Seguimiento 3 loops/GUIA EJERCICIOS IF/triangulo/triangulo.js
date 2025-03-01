do{
let angu1 = parseInt(prompt("Ingrese el primer angulo"))
let angu2 = parseInt(prompt("Ingrese el segundo angulo"))
let angu3 = parseInt(prompt("Ingrese el tercero angulo"))

if ((angu1 + angu2 + angu3) === 180){
    alert("Triangulo valido")
}else{
    alert("Triangulo invalido")
} 
desea=prompt("Desea repetir el proceso? (si o no)")
}while(desea=="si")