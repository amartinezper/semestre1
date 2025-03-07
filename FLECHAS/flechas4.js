const multiploDe3 = num =>{

   
    if(!Number.isInteger(num)){
        return "El numero debe ser entero"
    }else{
        let amp=0
        const s = Math.abs(num).toString()
        for(let i =0;i<s.length;i++){
            const digito =parseInt(s[i])
            amp+= digito

        }
        let hola = amp%3
        if(hola==0){
            return "El numero es multiplo de 3"
        }else{
            return "El numero no es multiplo de 3"
        }
    }

}

console.log(multiploDe3(8.9))