console.time();
//factorial(50); // 0.35s 0.45s
//factorialRecursivo(50); // 0.4s 0.5s
console.timeEnd();
function factorial(n:number = 0){
    let res = 1;
    for(let i = n; i >= 1; i--){ // 5 * 4 * 3 * 2 * 1
        res *= i;
    }
    return res;    
}
/*
    both the recursive and iterative algorithms have similar time complexities and are efficient. However, the iterative algorithm has a lower space complexity and is therefore preferable in situations where memory usage is a concern.
*/
function factorialRecursivo(n:number = 0){
    if(n === 0){
        return 1;
    }else{
        return (n) * factorialRecursivo(n-1);
    }
}