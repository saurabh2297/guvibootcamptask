//Problem statemnt link :-  https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5


/*Problem 0 : Part A (15 mins):
Playing with JSON object’s Values:*/

var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
   }
   console.log(cat);

cat.weight = 4; //updating height of fluffy
cat.height = 3; //updating weight of fluufy
cat.name = "Fluffyy"; //upadting name of fluffy

var total_weight = 0; //to store total weight of friends
var total_activities = cat.activities.length; // to store total activities of all 

for(let i=0;i<cat.catFriends.length;i++){
    console.log(cat.catFriends[i].name); // name of each friend
    console.log(cat.catFriends[i].activities.toString()); // activities of each friend
    total_weight += cat.catFriends[i].weight; //summing up weight
    total_activities+= cat.catFriends[i].activities.length //summimg up number of activities
    cat.catFriends[i].activities.concat(['play','eatfood']) // adding activities to friends
}
console.log("Total weight of cat_friends: "+total_weight)
console.log("Total activities of all cats: "+total_activities)
cat.catFriends[0].furcolor = 'brown'; // updating furcolor of bar

/*Problem 0 : Part B (15 mins):
Iterating with JSON object’s Values*/

var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    }
    ]
   }

   for(let i=0;i<myCar.accidents.length;i++){
       myCar.accidents[i].atFaultForAccident = false; //changing atFaultForAccident to false
       console.log(myCar.accidents[i].date) // date of each accident
   }


/*Problem 1 (5 mins):
Parsing an JSON object’s Values:*/

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
  var arr = [] // array to hold all the values 
  for(var i in obj){
      arr.push(obj[i])
  }
  return arr;
}

/*Problem 2(5 mins) :
Parsing an JSON object’s Keys:*/

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllKeys(obj) {
  var arr = [] // array to hold all the values 
  for(var i in obj){
      arr.push(i)
  }
  return arr;
}

/*Problem 3( 7–9 mins):
Parsing an JSON object and convert it to a list:*/

var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
    var arr = [];
  for(var i in obj){
      arr.push([i,obj[i]]);
  }
  return arr;
}

/*Problem 4( 5 mins):
Parsing a list and transform the first and last elements of it:*/

var ar = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(ar) {
    var key = array.shift() //getting value at first index
    var value = ar.pop() // getting value at last index
    newObject = {}
    newObject[key] = value; // assigning as key: value pair to object

 return newObject;
}

/*Problem 5 ( 7 -9 mins):
Parsing a list of lists and convert into a JSON object:*/

var ar2 = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(let i=0;i<ar2.length;i++){
     newObject[ar2[i][0]] = ar2[i][1];
 }
 return newObject;
}


/*Problem 6 (10 mins):
Parsing a list of lists and convert into a JSON object:*/

var ar3= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 //Your code
 for(let i =0;i<ar3.length;i++){
    var newObject = {};
    for(let j=0;j<ar3[i].length;j++){
        newObject[ar3[i][j][0]] = ar3[i][j][1];
    }
    tranformEmployeeList.push(newObject)
 }
 return tranformEmployeeList;
}

/*Problem 7 (10 — 20 mins):
Parsing two JSON objects and Compare:*/

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 // your code
 if(JSON.stringify(expected)===JSON.stringify(actual)){
     console.log("PASSED")
 }
 else{
     console.log("FAILED "+testName+" "+JSON.stringify(expected)+" but got "+JSON.stringify(actual))
 }
}

/*Problem 8(10 mins):
Parsing JSON objects and Compare:*/

var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   function chksecurityQuestions(securityQuestions,question,ans) {
        for(let i =0;i<securityQuestions.length;i++){
            if(question === securityQuestions[i].question){
                if(ans === securityQuestions[i].expectedAnswer){
                    return true; // if both question answer correct
                }
                else{
                    return false; //if answer is wrong
                }
            }
        } 
        return false; // if question not found return false
   }

/*Problem 9(20 mins):
Parsing JSON objects and Compare:*/

var students = [
    {
    name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56} 
    ];
   function returnMinors(arr)
   {
       var lst = []
       for(let i=0;i<students.length;i++){
           if(students[i].age<20){
               lst.push(students[i].name)
           }
       }
       return lst;
   }
   console.log(returnMinors(students));
