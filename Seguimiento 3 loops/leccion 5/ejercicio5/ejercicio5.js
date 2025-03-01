ttt=0
do{
let cant = parseInt(prompt("Ingrese cuantos libros desea que le prestemos"))
let tiem = parseInt(prompt("Cuantos dias necesita en su prestamo"))
if(tiem < 1 || tiem > 30){
    alert("Error, solo se puede prestar de 1 a 30 dias")
    console.error();
}else if (cant > 5){
    alert("Error, se puede prestar maximo 5 libros")
    console.error();
}else

    for(i=1;i<=cant;i++){
        titu1 = prompt("Ingrese el titulo de su libro")
        categoria1 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
        switch(categoria1){
            case 1:
                t1 =500
                break;

            case 2:
                t1 =100
                break;

            case 3:
                t1 =0
                break;
        }
        
        ttt+=t1
    }
    ttt *= tiem
if (tiem>10){
    ttt *= 0.9
}
alert("Su total es: "+ ttt)

desea=prompt("Quiere prestar otros libros? (si o no)")
}while(desea=="si")
