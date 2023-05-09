//mostrarBinario(25); // 11001
console.time();
let txt = '';
//console.log([...mostrarBinarioRecursivo(25, txt)].reverse().join('')); // 11001
//mostrarBinarioRecursivo(32503, txt);
mostrarBinario(32501);
console.timeEnd();
function mostrarBinarioRecursivo(n:number, txt:string){

    let aux = 1;

    if(n===0){
        //console.log(0)
        return txt;
    }else{
        //console.log(n%2);
        txt += (n%2)+'';
        //n = mostrarBinarioRecursivo(Math.trunc(n/2));
        return mostrarBinarioRecursivo(Math.trunc(n/2), txt);
    }

    //console.log(1%2);

}


function mostrarBinario(n:number){

    let aux = 1;
    let res = 0;
    let result = '';

    aux = Math.trunc(n/2);
    res = n%2;
    result = res+'';
    while(aux > 0){
        res = aux%2; 
        aux = Math.trunc(aux/2);        
        result += ''+res;
    }
    //console.log({aux, result: [...result].reverse().join("")}) // 
}