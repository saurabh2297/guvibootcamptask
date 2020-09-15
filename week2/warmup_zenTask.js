/*Problem:
Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number.*/

function addFive(num){
    return num+5;
}
console.log(addFive(-5))

/*Problem:
Write a function called “getOpposite”.
Given a number, return its opposite*/

var num = 5;
function getOpposite(num) {
    if((typeof(num) != typeof(1)) || (Math.ceil(num)!=num)){
        return -1
    }
    else{
        return num*(-1)
    }
}
var result = getOpposite(num)

/*Problem:
Fill in your code that takes an number minutes and converts it to seconds.*/

var min = 5;
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min)

/*Problem
Create a function that takes a string and returns it as an integer.*/

var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr)

/*Problem
Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/

var myint = 0;
function nextNumber(myint) {
    return 1+myint;
}
var myNextint = nextNumber(myint)

/*Problem
Create a function that takes an array and returns the first element.*/

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr.shift();
}
var data = getFirstElement(arr)

/*Problem
Convert Hours into Seconds*/

var arr = [1, 2, 3];
function hourToSeconds(arr) {
    return arr.map(a=>a*60*60)
}
var data = hourToSeconds(arr)

/*Problem
Find the Perimeter of a Rectangle
Create a function that takes height and width and finds the perimeter of a rectangle.*/

function findPerimeter(num1,num2) {
    return 2*(num1+num2)
}
var peri = findPerimeter(6,7)

/*Problem
Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.*/

function lessThan100(num1,num2) {
    return (num1+num2<100 ? true : false);
}
var res = lessThan100(22,15)

/*Problem
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters.
 The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.*/

function remainder(num1,num2) {
    return num1%num2;
}
var res = remainder(1,3)

/*Problem
Old macdonald had a farm:
MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. 
You have to implement a function that returns the total number of legs of all the animals.*/

function CountAnimals(tur,horse,pigs) {
    return (2*turs + 4*horse + 4*pigs)
}
var legs = CountAnimals(2,3,5)

/*Problem
Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.*/

function frames(num1,num2) {
    return (num1*num2*60);
}
var fps = frames(1,2)

/*Problem
Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.*/

function divisibleByFive(num1) {
    return (num1%5===0)
}
var divisible = divisibleByFive(5)

/*Problem:
Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.*/

function isEven(num){
    return (num%2 === 0)
   }
   var even = isEven(5)

/*Problem:
Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.*/

function areBothOdd(num1, num2){
    return (num1%2!=0 && num2&2!=0)
   }

/*Problem:
Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.*/


function getFullName(firstName, lastName){
    return firstName+" "+lastName;
   }

/*Problem:
Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.*/

function getLengthOfWord(word1){
    return word1.length
   }

/*Problem:
Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length.*/

function isSameLength(word1, word2){
    return word1.length === word2.length;
   }

/*Problem:
Create a function to calculate the distance between two points defined by their x, y coordinates*/

console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
    let a = x1-x2;
    let b = y1-y2;
    return Math.sqrt(a*a + b*b);
}

/*Problem:
Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. 
If the array has a length of 0, it should return ‘undefined’.*/

function getNthElement(array,n){
    return array[n];
   }

/*Problem:
Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. 
If the given array has a length of 0, it should return ‘-1’.*/

function getLastElement(array){
    if(array.length === 0){
        return -1;
    }
    return array.pop();
   }

/*Problem:
Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. 
If there is no property at the given key, it should return undefined.*/

var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {
        return obj[key];
   }

/*Problem:
Write a function called “addProperty”.
Given an object and a key, “addProperty” adds a new property on the given object with a value of true.*/

var obj = {
    mykey: "value"
   };
   function addProperty(obj, key){
        obj[key] = true;
   }

/*Problem:
Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.*/

function removeProperty(obj, key){
    delete obj[key];
   }
   
/*Problem:
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.*/

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    const parr = arr.filter(arr => arr >= 0);
    const narr = arr.filter(arr => arr < 0)
    const rarr = [];
    rarr.push(parr.length);
    rarr.push(narr.reduce((a,b) => a+b));
    return rarr;
}
console.log(ar2(arr));

/*Problem:
Create a function that receives an array of numbers and returns an array containing only the positive numbers*/

function getPositives(ar)
{
   return ar.filter(ar => ar>=0)
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

/*Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).*/

function powersOfTwo(n){
    for(let i=0;i<=n;i++){
        res= res + (Math.pow(2,i)) +",";
    }
    return res;
  }

  /*Problem:
Find the maximum number in an array of numbers*/

function findMax(ar)
{
    return Math.max(ar)
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

/*Problem:
Print the first 100 prime numbers*/

printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(n)
{
 for(let i=2;i<n;i++){
     if(n%i===0){
         return false;
     }
 }
 return true;
}

/*Problem:
Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”*/

console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
 var pr_ar = [];
 var cnt = 0;
 var snum = startAt+1
 while(cnt < nPrimes){
     if (isPrime(snum)){
         pr_ar.push(snum);
         cnt++;
     }
     snum++;
 }
 return pr_ar;
}

// Returns true if a number is prime
function isPrime(n)
{
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return arr===1?false:true; // 1 is not prime
}

/*Problem:
Reverse a string*/

var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   return s.split("").reverse().join("");
}

/*Problem:
Create a function that will merge two arrays and return the result as a new array*/

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 //Some piece of code goes here
 for(let el of ar2)
 {
 result.push(el);
 } 
 return result;   // we could have used concat function also
}

/*Problem:
Calculate the sum of numbers received in a comma delimited string*/

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  var ar = s.split(",")
  ar = ar.map(Number);
  return ar.reduce((a,b) => a+b)
}