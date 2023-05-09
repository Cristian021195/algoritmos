const arreglo = Array.from(Array(10),(e,e_i)=>e_i+1);

sumatoriaBucle(arreglo);

function sumatoriaBucle(arr:number[]){

    for(let i = 0; i < arr.length; i++){
        let sumaAnteriores = 0;
        for(let j = 0; j < i; j++){
            sumaAnteriores += arr[j];
        }
        arr[i] -= sumaAnteriores;
    }
    

}