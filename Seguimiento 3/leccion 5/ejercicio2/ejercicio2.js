alert("Para el pago de su matricula mientras mas cuotas tenga mas sera el precio de los intereses")
let cuotas = parseInt(prompt("Cuantas cuotas quiere para su pago?"))

if (cuotas == 1){
    precio = 7000000
}else {
    precio = Math.round((7000000 + (7000000*(cuotas/50)))/cuotas)
}
alert("Tiene que pagar "+ precio + "$ por "+ cuotas+ " mes/es") 