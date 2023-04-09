//console.log(potencia(2,4));
//console.log(potenciaBucle(2,20));
console.time();
//potencia(2,20);
//potenciaBucle(2,20);
console.timeEnd();

function potencia(n:number, exp:number){ // 2e4 = 2 x 2 x 2 x 2 || 2 x 2e3 || 2e2 x 2e2
    let res = 0;
    if(exp > 0){
        res = n * potencia(n, exp-1);
        return res;
    }else{
        return 1;
    }
}

function potenciaBucle(n:number, exp:number){ // 2e4 = 2 x 2 x 2 x 2 || 2 x 2e3 || 2e2 x 2e2
    let res = 1;
    for(let i = 1; i <= exp; i++){ // 2 * 2 * 2 * 2
        res *= n;
    }
    return res;
}