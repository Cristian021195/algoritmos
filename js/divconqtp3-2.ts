const numeros:number[] = [8,5,9,10,3,1,6,7,0,11,2]; // [0,1,2,3,4,5,6,7,8,9,10,11] - 11 elem
let aux = {contador: 0};

function dividir(numeros, aux):number{
    if(numeros.length < 2){
        if(numeros[0] % 2 !== 0){
            aux.contador -= numeros[0];
            //console.log(aux.contador);
        }else{
            
            aux.contador += numeros[0];
            //console.log(aux.contador);
        }
        return 0;
    }

    const middle = Math.floor(numeros.length / 2);
    const left = numeros.slice(0, middle);
    const right = numeros.slice(middle);

    dividir(left,aux);
    dividir(right,aux);

    return aux.contador;

}

console.log(dividir(numeros,aux))