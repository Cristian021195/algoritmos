//const infija:string[] = ['a','*','(','b','+','c',')','/','d','=']; // 10
/*const infija:string[] = ['a','+','b','*','~','c','-','d','=']; // 10
const posfija:string[] = [];
let PAUX:string[] = [];

if(infija.length > 2){
    let contador = 0; let letra = infija[0];
    while (letra != '=') {
        letra = infija[contador];
        switch (letra) {            
            case '+' || '-':{
                PAUX.push(letra)
                break;
            }
            case '*':{
                PAUX.push(letra);
                
                break;
            }
            case '/':{
                PAUX.push(letra)
                break;
            }
            case '~':{
                PAUX.push(letra)
                break;
            }case '(':{
                PAUX.push(letra)
                break;
            }
            case ')':{
                if(PAUX.length> 0){
                    let conaux = PAUX.length - 1;
                    while (conaux >= 0) {
                        if(PAUX[conaux] != '('){
                            posfija.push(PAUX[conaux]);
                        }
                        conaux--;
                    }
                    PAUX = [];
                }

                break;
            }
            default: {
                posfija.push(letra);
                break;
            }
                
        }
        contador++;
    }

    posfija.pop();

    if(PAUX.length > 0){
        let conaux = PAUX.length - 1;

        while(conaux >= 0){
            posfija.push(PAUX[conaux]);
            conaux --;
        }
    }

    posfija.push('=');
    PAUX = [];

    console.log(posfija);
    console.log(PAUX);
}*/
// a + b * ~ c - (d + f) =
let infija3:string[] = ['~','a','+','b','*','~','c','-','(','d','+','(','k','+','f',')','*','m',')','='];
let infija2:string[] = ['a','*','(','b','+','c',')','/','d','='];
let infija:string[] = ['~','a','+','b','*','~','c','-','(','(','d','+','f',')',')', '='];// 13 // abc~*+df+-  =>  a+b*~c - (d+f)
let PAUX:string[] = [];
let posfija:string[] = [];


infija3.forEach((e,i)=>{
    if(i == 99){console.log(e);}
    if(i <= 99){
        
        if(e === '+' || e === '-'){
            if(PAUX[PAUX.length - 1] && PAUX[PAUX.length - 1] === '~'){
                
                let cont = PAUX.length;
                while(cont){
                    posfija.push(PAUX[PAUX.length - 1]);
                    PAUX.pop();
                    cont --;
                }
                //PAUX = [];
                
                PAUX.push(e);
            }else{
                PAUX.push(e);
            }       
        }else if(e === '*' || e === '/'){
            if(PAUX[0] && PAUX[0] === '~'){
                posfija.push(PAUX[0]);
                PAUX = []; 
            //}else if(PAUX[0] && (PAUX[0] === '+' || PAUX[0] === '-')){
            }else{
                PAUX.push(e);
            }
        }else if(e === '~'){
    
            PAUX.push(e);
    
        }else if(e === '('){

            PAUX.push(e);
    
        }else if(e === ')'){

            console.log(PAUX)

            let cont = PAUX.length - 1;
            while(cont >= 0){

                //if(PAUX[cont] != '('){
                    if(PAUX[cont] != '('){
                        posfija.push(PAUX[cont]);
                    }
                    PAUX.pop();
                    //break;
                //}
                //posfija.push(PAUX[PAUX.length - 1]);
                //PAUX.pop();
                cont --;
            }
            PAUX.pop();
    
        }else if(e === '='){
            if(PAUX.length > 0){
                let cont = PAUX.length - 1;
                while(cont >= 0){
                    posfija.push(PAUX[cont]);
                    PAUX.pop();
                    cont --;
                }
            }
        }else{
            posfija.push(e);    
        }

    }


})

console.log(posfija.join(''));
console.log(PAUX);


