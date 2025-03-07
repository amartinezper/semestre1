const contarA = str =>{
    str=str.toLowerCase();

    let a = 0

    for (let i=0; i<str.length;i++ ){
        const char =str[i];
        if(char==="a"){
            a++
        }
    }
    return a
}
console.log(contarA("Alejandro"))