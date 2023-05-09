let num = 0; let obj = {num:0}

console.log('Primitive Before: '+num);
changePrimitive(num);
console.log('Primitive After: '+num);

console.log('Non Primitive After',obj);
changeNonPrimitive(obj)
console.log('Non Primitive Before',obj);

function changePrimitive(num:number){ // not change referenced value
    num ;
}

function changeNonPrimitive(obj:any){
    obj.num = 1;
}