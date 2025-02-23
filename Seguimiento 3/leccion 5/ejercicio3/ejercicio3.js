alert("En nuestra tienda ofrecemos pares clasicos, running y basketball")
alert("Solo tenemos tallas desde 35 a 44")
let num = parseInt(prompt("Cuantos pares quiere (maximo 5 por transacción)"))

switch(num){
    case 1:
    tipo1 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
    talla1 = prompt("Escriba la talla que quiere")
    switch(tipo1){
        case 1:
             t1=500000
            break;

        case 2:
            t1=800000
            break;

        case 3:
            t1=1000000
            break;
    }
    total = t1 
    alert("El precio de su compra es: " + total)
    if (talla1 <35 || talla1>44 || talla2 <35 || talla2>44 || talla3 <35 || talla3>44 || talla4 <35 || talla4>44 || talla5 <35 || talla5>44){
        alert("Error, talla no disponible")
        console.error();
        
    }
    
    break;

    case 2:
    tipo1 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
    talla1 = prompt("Escriba la talla que quiere")
    switch(tipo1){
        case 1:
            t1=500000
            break;

        case 2:
            t1=800000
            break;

        case 3:
            t1=1000000
            break;
    }
    tipo2 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
    talla2 = prompt("Escriba la talla que quiere")
    switch(tipo2){
        case 1:
            t2=500000
            break;

        case 2:
            t2=800000
            break;

        case 3:
            t2=1000000
            break;
    }
    total = t1+t2
    alert("El precio de su compra es: " + total)
   
    if (talla1 <35 || talla1>44 || talla2 <35 || talla2>44 || talla3 <35 || talla3>44 || talla4 <35 || talla4>44 || talla5 <35 || talla5>44){
        alert("Error, talla no disponible")
        console.error();
        
    }
    
    break;

    case 3:
        tipo1 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
        talla1 = prompt("Escriba la talla que quiere")
        switch(tipo1){
            case 1:
                t1=500000
                break;
    
            case 2:
                t1=800000
                break;
    
            case 3:
                t1=1000000
                break;
        }
        tipo2 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
        talla2 = prompt("Escriba la talla que quiere")
        switch(tipo2){
            case 1:
                t2=500000
                break;
    
            case 2:
                t2=800000
                break;
    
            case 3:
                t2=1000000
                break;
        }
        tipo3 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
        talla3 = prompt("Escriba la talla que quiere")
        switch(tipo3){
            case 1:
                t3=500000
                break;
    
            case 2:
                t3=800000
                break;
    
            case 3:
                t3=1000000
                break;
        }
        total = t1+t2+t3
        total *= 0.9
        alert("El precio de su compra es: " + total)
        if (talla1 <35 || talla1>44 || talla2 <35 || talla2>44 || talla3 <35 || talla3>44 || talla4 <35 || talla4>44 || talla5 <35 || talla5>44){
            alert("Error, talla no disponible")
            console.error();
            
        }
        
            
        
        
        break;

        case 4:
            tipo1 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
            talla1 = prompt("Escriba la talla que quiere")
            switch(tipo1){
                case 1:
                    t1=500000
                    break;
        
                case 2:
                    t1=800000
                    break;
        
                case 3:
                    t1=1000000
                    break;
            }
            tipo2 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
            talla2 = prompt("Escriba la talla que quiere")
            switch(tipo2){
                case 1:
                    t2=500000
                    break;
        
                case 2:
                    t2=800000
                    break;
        
                case 3:
                    t2=1000000
                    break;
            }
            tipo3 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
            talla3 = prompt("Escriba la talla que quiere")
            switch(tipo3){
                case 1:
                    t3=500000
                    break;
        
                case 2:
                    t3=800000
                    break;
        
                case 3:
                    t3=1000000
                    break;
            }
            tipo4 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
            talla4 = prompt("Escriba la talla que quiere")
            switch(tipo4){
                case 1:
                    t4=500000
                    break;
        
                case 2:
                    t4=800000
                    break;
        
                case 3:
                    t4=1000000
                    break;
            }
            total = t1+t2+t3+t4
            total *= 0.90
            
            alert("El precio de su compra es: " + total)
            if (talla1 <35 || talla1>44 || talla2 <35 || talla2>44 || talla3 <35 || talla3>44 || talla4 <35 || talla4>44 || talla5 <35 || talla5>44){
                alert("Error, talla no disponible")
                console.error();
                
            }
            
                
            break;


case 5:
    tipo1 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
    talla1 = prompt("Escriba la talla que quiere")
    switch(tipo1){
        case 1:
            t1=500000
            break;

        case 2:
            t1=800000
            break;

        case 3:
            t1=1000000
            break;
    }
    tipo2 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
    talla2 = prompt("Escriba la talla que quiere")
    switch(tipo2){
        case 1:
            t2=500000
            break;

        case 2:
            t2=800000
            break;

        case 3:
            t2=1000000
            break;
    }
    tipo3 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
    talla3 = prompt("Escriba la talla que quiere")
    switch(tipo3){
        case 1:
            t3=500000
            break;

        case 2:
            t3=800000
            break;

        case 3:
            t3=1000000
            break;
    }
    tipo4 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
    talla4 = prompt("Escriba la talla que quiere")
    switch(tipo4){
        case 1:
            t4=500000
            break;

        case 2:
            t4=800000
            break;

        case 3:
            t4=1000000
            break;
    }

    tipo5 = parseInt(prompt("elija 1 para clasicos, 2 running y 3 basketball"))
    talla5 = prompt("Escriba la talla que quiere")
    switch(tipo5){
        case 1:
            t5=500000
            break;

        case 2:
            t5=800000
            break;

        case 3:
            t5=1000000
            break;
    }
    total = t1+t2+t3+t4+t5
    total *= 0.90
    
    alert("El precio de su compra es: " + total)
    if (talla1 <35 || talla1>44 || talla2 <35 || talla2>44 || talla3 <35 || talla3>44 || talla4 <35 || talla4>44 || talla5 <35 || talla5>44){
        alert("Error, talla no disponible")
        console.error();
        
    }
    
      
    break;

    

}






