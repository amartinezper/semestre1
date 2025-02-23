num1 = parseInt(prompt("Ingrese el primer numero"))
num2 = parseInt(prompt("Ingrese el segundo numero"))
num3 = parseInt(prompt("Ingrese el tercer numero"))

if (num1 > num2 && num3){
    alert("El numero " + num1 + " es el mayor")
} else if (num2 > num1 && num3){
    alert("El numero " + num2 + " es el mayor")
} else if (num3 > num2 && num1){
    alert("El numero " + num3 + " es el mayor")
}