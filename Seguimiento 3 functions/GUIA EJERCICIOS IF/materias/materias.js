let fisica = parseInt(prompt("Ingrese su calificación de fisica"))
let quimica = parseInt(prompt("Ingrese su calificación de Quimica"))
let biologia = parseInt(prompt("Ingrese su calificación de biologia"))
let mate = parseInt(prompt("Ingrese su calificación de Matematicas"))
let info = parseInt(prompt("Ingrese su calificación de Informatica"))

let fin = (((fisica+quimica+biologia+mate+info)/50)*100)
function hola(fin){
if(fin < 60){
    return "mala"
}else if(fin < 80){
    return "Buena"
} else if (fin >=80){
    return "Excelente"
}

}
alert("Tu porcentaje es " + fin + "% y tu calificacion es " + hola(fin))
