const num = numero =>{
    const str= Math.abs(numero).toString()
    mul = 1;
    for(let i=0;i<str.length;i++){
        const digito =parseInt(str[i])
        mul*=digito
    }
    return mul
}
console.log(num(123))

