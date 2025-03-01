do{
let fisica = parseInt(prompt("Ingrese su calificación de fisica"))
let quimica = parseInt(prompt("Ingrese su calificación de Quimica"))
let biologia = parseInt(prompt("Ingrese su calificación de biologia"))
let mate = parseInt(prompt("Ingrese su calificación de Matematicas"))
let info = parseInt(prompt("Ingrese su calificación de Informatica"))

let fin = (((fisica+quimica+biologia+mate+info)/50)*100)

if(fin < 60){
    cali = "mala"
}else if(fin < 80){
    cali = "Buena"
} else if (fin >=80){
    cali = "Excelente"
}
alert("Tu porcentaje es " + fin + "% y tu calificacion es " + cali)
desea=prompt("Desea calcular otra vez? (si o no)")
}while(desea=="si")
