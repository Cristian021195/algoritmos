const lista1 = [1,0,9,7,5,8];
const lista2 = [0,4,1,7];
let contador = 0;


/*for(let i = 0; i < lista1.length; i++){
    for(let b = 0; b < lista2.length; b++){
        if(lista1[i] === lista2[b]){
            contador++;
            break;
        }
    }   
}*/

elementoLista(lista1, lista1.length, lista2, lista2.length)

function elementoLista(lista:number[], longitud:number, lista2:number[], longitud2:number, ):number{
    if(longitud == 0){
        return lista[longitud];
    }else{
        longitud = longitud-1;
        console.log(lista[longitud])

        if(longitud2 == 0){
            
            //return lista2[longitud2];
        }else{
            console.count('esto');
            longitud2 = longitud2-1;
            console.log(lista2[longitud2])
            return elementoLista(lista, longitud,lista2, longitud2);
        }

        return elementoLista(lista, longitud,lista2, longitud2);
    }
    
}

/*elementoLista(lista1, lista1.length)

function elementoLista(lista:number[], longitud:number):number{
    if(longitud == 0){
        return lista[longitud];
    }else{
        longitud = longitud-1;
        console.log(lista[longitud])
        return elementoLista(lista, longitud);
    }
    
}*/
