
let citas = []

function programarcitas(){
    alert("Bienvenido al programa de registro de citas")
    nombre = prompt("Por favor, ingrese su nombre: ")
    doctor = prompt("Por favor, ingrese el nombre de el medico que se te asigno: ")
    fechaingresada = prompt("Ingrese una fecha y hora en formato YYYY-MM-DD HH:MM:");
    let regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
    if (!regex.test(fechaingresada)) {
        console.log("Formato incorrecto. Use YYYY-MM-DD HH:MM");
    }else{
    let partes = fechaingresada.split(" ");
    let fechaParte = partes[0];
    let horaParte = partes[1];


    let [year, month, day] = fechaParte.split("-").map(Number);
    let [hours, minutes] = horaParte.split(":").map(Number);
    fecha = new Date(year, month - 1, day, hours, minutes);
    if (isNaN(fecha.getTime())){
        console.log("Fecha no válida. Intente nuevamente.");
    }else{

    cita = {
            name: nombre,
            doctor: doctor,
            date : fecha
        }
    citas.push(cita)
}
}
}

function organizar(){
citasordenadas = citas.sort((a , b) => b.date - a.date)
}

function cancelarcita(){
    nameparacancelar = prompt("Ingrese su nombre")
    drparacancelar = prompt("Ingrese el nombre de su doctor")
    hola= citas[citas.findIndex(y=> y == (citas.filter(x=>x.name==nameparacancelar)[0]))]
    chao= citas[citas.findIndex(y=> y == (citas.filter(x=>x.doctor==drparacancelar)[0]))]
    if(hola==chao){
        citas.splice(citas.findIndex(y=> y == (citas.filter(x=>x.name==nameparacancelar)[0])),1)
        alert("Cita cancelada")
    }else {
        alert("Los datos ingresados no coinciden, intentelo de nuevo")
    }
citas.forEach(x=>x.name==nameparacancelar)
}

function vercitas(){
if(citas.length > 0 ){
    citas.forEach(x => {
          x.date = new Date(x.date).toLocaleString();
        alert(JSON.stringify(x, null, 2));
      });
            console.log(citas)
            }else{
                alert("No hay citas pendientes")
            }
}
    
do{
curso = prompt("Presione 1 para separar una cita, 2 para cancelar una cita o 3 para ver las citas programadas")
if(curso == 1){
programarcitas()
organizar()
}else if(curso==2){
cancelarcita()
}else if(curso==3){
vercitas()
}
desea=prompt("Desea separar otra cita / volver a ejecutar el programa?")
}while(desea=="si")
