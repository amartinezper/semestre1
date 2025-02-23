let cant = parseInt(prompt("Ingrese cuantos libros desea que le prestemos"))
let tiem = parseInt(prompt("Cuantos dias necesita en su prestamo"))
if(tiem < 1 || tiem > 30){
    alert("Error, solo se puede prestar de 1 a 30 dias")
    console.error();
}else if (cant > 5){
    alert("Error, se puede prestar maximo 5 libros")
    console.error();
}else{
    switch(cant){
        case 1:
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
            total=t1
            break;

            case 2:
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

                titu2 = prompt("Ingrese el titulo de su libro")
                categoria2 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
                switch(categoria2){
                    case 1:
                        t2 =500
                        break;
    
                    case 2:
                        t2 =100
                        break;
    
                    case 3:
                        t2 =0
                        break;
                }
                total=t1+t2
                break;


            
                case 3:
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
    
                    titu2 = prompt("Ingrese el titulo de su libro")
                    categoria2 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
                    switch(categoria2){
                        case 1:
                            t2 =500
                            break;
        
                        case 2:
                            t2 =100
                            break;
        
                        case 3:
                            t2 =0
                            break;
                    }
                    titu3 = prompt("Ingrese el titulo de su libro")
                    categoria3 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
                    switch(categoria3){
                        case 1:
                            t3 =500
                            break;
        
                        case 2:
                            t3 =100
                            break;
        
                        case 3:
                            t3 =0
                            break;
                    }
                    total=t1+t2+t3
                    break;

                    case 4:
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
        
                        titu2 = prompt("Ingrese el titulo de su libro")
                        categoria2 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
                        switch(categoria2){
                            case 1:
                                t2 =500
                                break;
            
                            case 2:
                                t2 =100
                                break;
            
                            case 3:
                                t2 =0
                                break;
                        }
                        titu3 = prompt("Ingrese el titulo de su libro")
                        categoria3 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
                        switch(categoria3){
                            case 1:
                                t3 =500
                                break;
            
                            case 2:
                                t3 =100
                                break;
            
                            case 3:
                                t3 =0
                                break;
                        }

                        titu4 = prompt("Ingrese el titulo de su libro")
                        categoria4 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
                        switch(categoria4){
                            case 1:
                                t4 =500
                                break;
            
                            case 2:
                                t4 =100
                                break;
            
                            case 3:
                                t4 =0
                                break;
                        }
                        total=t1+t2+t3+t4
                        break;
                    case 5:
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
            
                            titu2 = prompt("Ingrese el titulo de su libro")
                            categoria2 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
                            switch(categoria2){
                                case 1:
                                    t2 =500
                                    break;
                
                                case 2:
                                    t2 =100
                                    break;
                
                                case 3:
                                    t2 =0
                                    break;
                            }
                            titu3 = prompt("Ingrese el titulo de su libro")
                            categoria3 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
                            switch(categoria3){
                                case 1:
                                    t3 =500
                                    break;
                
                                case 2:
                                    t3 =100
                                    break;
                
                                case 3:
                                    t3 =0
                                    break;
                            }
    
                            titu4 = prompt("Ingrese el titulo de su libro")
                            categoria4 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
                            switch(categoria4){
                                case 1:
                                    t4 =500
                                    break;
                
                                case 2:
                                    t4 =100
                                    break;
                
                                case 3:
                                    t4 =0
                                    break;
                            }

                            titu5 = prompt("Ingrese el titulo de su libro")
                            categoria5 = parseInt(prompt("Ingrese 1 si su libro es bestseller/novedad, 2 si es de literatura o 3 si es academico"))
                            switch(categoria5){
                                case 1:
                                    t5 =500
                                    break;
                
                                case 2:
                                    t5 =100
                                    break;
                
                                case 3:
                                    t5 =0
                                    break;
                            }
                            total=t1+t2+t3+t4+t5
                            break;
            
    
        }
}
total *= tiem
if (tiem>10){
    total *= 0.9
}
alert("Su total es: "+ total)
