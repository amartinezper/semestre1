do{
    alert("Ofrecemos planes de 15 dias, 1 mes o 3 meses")
let plan1 = parseInt(prompt("Elija 1 si quiere el de 15 dias, 2 si quiere el de 1 mes y 3 si quiere el de 3 meses"))

function hola (plan1){
if (plan1== 1){
    plata = 18000
}else if(plan1 == 2){
    plata = 35000
}else if(plan1 == 3){
    plata= 86000
}
return "Su mensualidad es de: " + plata
}
alert(hola(plan1))
desea=prompt("Desea cotizar otro plan? (si o no)")
}while(desea=="si")