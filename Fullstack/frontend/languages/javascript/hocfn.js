let  a = prompt("enter value for a")
let b = prompt("enter value for b")
const result = 0;
let sum = function(a,b){
result = a+b;
return result;
}

let sub = function(a,b){
    result = a-b;
    return result;
    }

    let mul = function(a,b){
        result = a*b;
        return result;
        }

        let div = function(a,b){
            result = a/b;
            return result;
            }

            let mod = function(a,b){
                result = a%b;
                return result;
                }

const arithmetic = [sum,sub,mul,div,mod];
for(let i=0;i<arithmetic.length;i++){
    
}