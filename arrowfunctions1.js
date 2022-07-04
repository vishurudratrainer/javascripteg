//Arrow function : came to make function creation more simple
//In Javascript variables can hold functions
var add = function(a,b){
    return a+ b
}

let res = add(33,55)
console.log(res)
//(Parameters)=>statement
//If arrow contains single statement no need to explictly write return
var addarrow = (a,b)=>a+b
res = addarrow(23,45)
console.log(res)