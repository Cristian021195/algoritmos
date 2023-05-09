// OR LOGICO
console.log(false || false)
console.log(!((!false)&&(!false)))

//IMPLICACION:  v->f = f , f->f = v, f->v = v, v->v=>v
console.log(!true || false) 


// DOBLE IMPLICACION SI Y SOLO SI

let a = !false || false; console.log(a);
let b = !false || false; console.log(b);

console.log( (a) && (b))
