alert("Ofrecemos planes de 15 dias, 1 mes o 3 meses")
let plan1 = prompt("Desea nuestro plan de 15 días? (si o no")
let plan2 = prompt("Desea nuestro plan de 1 mes ? (si o no")
let plan3 = prompt("Desea nuestro plan de 3 mes? (si o no")

if (plan1== "si"){
    plata = 18000
}else if(plan2 == "si"){
    plata = 35000
}else if(plan3 == "si"){
    plata= 86000
}
alert("Su mensualidad es de: " + plata)