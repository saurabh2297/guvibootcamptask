// implementing a calculator with basic arithmetic operation for elaborating callback

//declaring a function array containing all above functions

var funArr = []

funArr[add] = (a,b) => {return (a+b)};

funArr[sub] = (a,b) => {return (a-b)};

funArr[mul] = (a,b) => {return (a*b)};

funArr[div] = (a,b) => {return (a/b)};


// function with parameters doing callback to array functions according to operation

prm = (operation,funArr) => {
        return funArr[operation]
}


// function to get result

oper = (a,b,op) => {
    console.log(prm(op,funArr)(a,b)) //giving callback to prm function which in turn calling required function from array
}

console.log(oper(2,3,add))