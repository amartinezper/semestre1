const NoVocales = hola =>{
    hola=hola.toLowerCase()
    let a=0
    for(i=0;i<hola.length;i++){
        const h = hola[i]
        if(h!="a" && h!="e" && h!="i" && h!="o" && h!="u"){
            a++
            
        }
    }
    return a

}
console.log(NoVocales("ternero"))