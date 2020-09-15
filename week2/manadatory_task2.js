// Programs to be implemented using array function

//1:- Print odd numbers in an array 

var a1 = [1,2,3,4,5];
odd = (arr) =>  {return arr.filter( arr => arr%2!=0);}
odd(a1);

//2:- Convert all the strings to title caps in a string array

var a2 = ['abc','def','ghi','jKl'];
cnvt = (arr) => {
    //making first letter uppercase and rest string to lower case
    return arr.map( arr => arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase());
}
cnvt(a2);

//3:- Sum of all numbers in an array

var a3 = [1,2,3,4,5];
sum = (arr) => {
    return arr.reduce((a,b) => a+b)
}
sum(a3);

//4:- Return all the prime numbers in an array

var a4 = [1,2,3,4,5];
prime =  (arr) => {
    return arr.filter((arr) =>
    {
        for(let i=2;i<arr;i++){
            if(arr%i===0 || arr===1){         
                return false;
            }
        }
        return arr===1?false:true; //1 is not prime
    })
    
}
prime(a4)

//5:- Return all the palindromes in an array 

var a5 = ['abc','def','ghi','jkl','aba'];
pld = (arr) => {
    return arr.filter(arr => (arr.split("").reverse().join("") === arr))
}
pld(a5)
