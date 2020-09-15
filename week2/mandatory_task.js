// all function to be implented as IIFE

//1:- Print odd numbers in an array 

var a1 = [1,2,3,4,5];
(function (arr) {
    return arr.filter( arr => arr%2!=0);
})(a1);

//2:- Convert all the strings to title caps in a string array

var a2 = ['abc','def','ghi','jkl'];
(function (arr) {
    //making first letter uppercase and rest string to lower case
    return arr.map( arr => arr.charAt(0).toUpperCase() + arr.slice(1).toLowerCase());
})(a2);

//3:- Sum of all numbers in an array

var a3 = [1,2,3,4,5];
(function (arr) {
    return arr.reduce((a,b) => a+b)
})(a3);

//4:- Return all the prime numbers in an array

var a4 = [1,2,3,4,5];
(function (arr) {
    return arr.filter((arr) =>
    {
        for(let i=2;i<arr;i++){
            if(arr%i===0){         
                return false;
            }
        }
        return arr===1?false:true; // 1 is not prime
    })
    
})(a4);

//5:- Return all the palindromes in an array

var a5 = ['abc','def','ghi','jkl','aba'];
(function (arr) {
    return arr.filter(arr => (arr.split("").reverse().join("") === arr))
})(a5);

//6:- Return median of two sorted arrays of same size

var a61 = [1,2,3,4,5];
var a62 = [6,7,8,9,10];
(function (arr1,arr2) {
    var res = arr1.concat(arr2);
    res = res.sort(function(a,b){return a-b});
    return res[Math.floor((res.length-1)/2)] // even no. of elements so two medians possible taking the lower one
})(a61,a62);

//7:- Remove duplicates from an array

var a7 = [1,2,3,4,5,2,4,5];
(function (arr) {
    var set = new Set(arr); //converting to set will automatically remove duplicates
    return Array.from(set);
})(a7);

//8:- Rotate an array by k times and return the rotated array

var a8 = [1,2,3,4,5,2,4,5];
var k =4;
(function (arr,k) {
    k = k% arr.length; // if k>length then required no. of rotations
    var t1 = arr.slice(k) // getting last elements in rotated array
    var t2 = arr.splice(0,k) // starting elements after k rotation
    return t1.concat(t2) // joining both we get the result
})(a8,k);
