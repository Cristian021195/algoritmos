console.time();
//fibonacciBucle(500);
fibonacci(20);
console.timeEnd();
//0,1,1,2,3,5
function fibonacciBucle(n:number){
    let a:number = 0;let b:number = 1; let c:number;

    for(let i = 2; i<n; i++){
        c = a + b; // calculamos el siguiente término como la suma de los dos anteriores
        a = b; // actualizamos el valor de a al valor de b
        b = c;
    }
    return b;
    
}
function fibonacci(n:number){

    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // hace dos llamadas recursivas a la vez, por eso demora tanto 
    } // en algun punto de la recursividad hace dos veces el mismo calculo


    /* fib(5)
        -> fib(4) + fib(3)*
        fib(4)
            -> fib(3)* + fib(2)
        

        * hacemos el mismo calculo recursivo    
    */

}