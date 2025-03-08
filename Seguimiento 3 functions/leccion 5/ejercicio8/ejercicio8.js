do{
let carrera = parseInt(prompt("Escoja el numero de la carrera que quiere(1 o 2)"))
let edad = parseInt(prompt("Ingrese su edad"))
function hola(carrera,edad){
if (edad>18){
    switch(carrera){
        case 1:
            
                alert("En esta carrera puede apostar por A (300000), B(180000) O C(220000)")
            tip = parseInt(prompt("Elija 1 para apostar por el ganador y 2 para posiciones exactas (1ro y 2do)"))
            if (tip==1){
                gan = prompt("Elija su ganador (A,B,C")
                money=parseInt(prompt("Ingrese cuanto quiere apostar de 10000 a 10000000"))
                rand = Math.floor(Math.random()*10)+1
              
                if (rand<=3){
                    rand="A"
                }else if(rand<=6){
                    rand="B"
                }else if(rand<=10){
                    rand="C"
                }

                if(rand==gan && gan=="A"){
                    money += money*(300000/money)
                    return "Ganaste " + money

                }else if(rand==gan && gan=="B"){
                    money += money*(180000/money)
                    return "Ganaste " + money

                }else if(rand==gan && gan=="C"){
                    money += money*(220000/money)
                    return "Ganaste " + money

                }else{
                    return "Perdiste"
                }
            }else if(tip==2){
                pos1=prompt("Escoja su ganador")
                pos2=prompt("Escoja su segundo puesto")
                mone=parseInt(prompt("Cuanto dinero quiere apostar( entre 10000 a 10000000"))
                rand1 = Math.floor(Math.random()*10)+1
                rand2 = Math.floor(Math.random()*10)+1
                if (rand1<=3){
                    rand1="A"
                }else if(rand1<=7){
                    rand1="B"
                }else if(rand1<=10){
                    rand1="C"
                }
                if (rand2<=4){
                    rand2="A"
                }else if(rand2<=6){
                    rand2="B"
                }else if(rand2<=10){
                    rand2="C"
                }

                if(rand1==pos1 && rand2==pos2){
                    mone += mone*(10000/mone)
                    return "Ganaste " + mone

                }else{
                    return "Perdiste"
                }
            }
            break;

            case 2:
                alert("En esta carrera puede apostar por D (350000), E(100000) O F(120000)")
                tip = parseInt(prompt("Elija 1 para apostar por el ganador y 2 para posiciones exactas (1ro y 2do)"))
                if (tip==1){
                    gan = prompt("Elija su ganador (D,E,F")
                    money=parseInt(prompt("Ingrese cuanto quiere apostar de 10000 a 10000000"))
                    rand = Math.floor(Math.random()*10)+1
                  
                    if (rand<=3){
                        rand="D"
                    }else if(rand<=6){
                        rand="E"
                    }else if(rand<=10){
                        rand="F"
                    }
    
                    if(rand==gan && gan=="D"){
                        money += money*(350000/money)
                        return "Ganaste " + money
    
                    }else if(rand==gan && gan=="E"){
                        money += money*(100000/money)
                        return "Ganaste " + money
    
                    }else if(rand==gan && gan=="F"){
                        money += money*(120000/money)
                        return "Ganaste " + money
    
                    }else{
                        return "Perdiste"
                    }
                }else if(tip==2){
                    pos1=prompt("Escoja su ganador")
                    pos2=prompt("Escoja su segundo puesto")
                    mone=parseInt(prompt("Cuanto dinero quiere apostar( entre 10000 a 10000000"))
                    rand1 = Math.floor(Math.random()*10)+1
                    rand2 = Math.floor(Math.random()*10)+1
                    if (rand1<=3){
                        rand1="D"
                    }else if(rand1<=7){
                        rand1="E"
                    }else if(rand1<=10){
                        rand1="F"
                    }
                    if (rand2<=4){
                        rand2="D"
                    }else if(rand2<=6){
                        rand2="E"
                    }else if(rand2<=10){
                        rand2="F"
                    }
    
                    if(rand1==pos1 && rand2==pos2){
                        mone += mone*(10000/mone)
                        return "Ganaste " + mone
    
                    }else{
                        return "Perdiste"
                    }
                }
                break;
         
}


}else{
    return "Solo mayores de edad pueden apostar"
    
}

}
alert(hola(carrera,edad))
desea = prompt("Quieres apostar otra vez? (si o no)")
}while(desea=="si")