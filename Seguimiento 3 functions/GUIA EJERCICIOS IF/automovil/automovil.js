do{
    let auto = parseInt(prompt("Ingrese el numero de modelo de su carro"))
function hola(auto){
    if(auto === 119 || auto ===179 || auto ===189 || auto ===190 || auto ===191 || auto ===192 || auto ===193 || auto ===194 || auto ===195 || auto ===221 || auto ===780){
    return "El automovil esta defectuoso, llevar a garantia."

}else{
    return "Su automovil no esta defectuoso"
}
}
alert(hola(auto))
desea=prompt("Desea evaluar otro modelo? (si o no)")
}while(desea=="si")