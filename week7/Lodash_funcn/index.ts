function len(arr:Array<any>){
    let i:number=0;
    while(arr[i]!= undefined){
        i++;
    }
    return i;
}

//chunk implementation

function chnk(arr:Array<any>,num:number) {
    let k:number =len(arr)
    let tempArr:Array<any>=[]
    let mainArr:Array<any> = []
    for(let i:number =0 ;i<k;i++){
        tempArr.push(arr[i])
        if(len(tempArr)==num || i==k-1){
            mainArr.push(tempArr);
            tempArr=[]
        }
    }
    return mainArr;
}

//reduce implementation

function reduce(arr: Array<Number>, fn: Function){
    let result:Number = 0;
    for (let i in arr){
        result = fn(result, arr[i])
    }
    return result;
}

//filter implementation

function filter(array: Array<any>, fn: Function){
    var filarr = [];
    for (let i in array) {
        if (fn(array[i]))
            filarr.push(array[i]);
    }
    return filarr;
}

//find function

function find(array: Array<any>, fn: Function){
    let k:number = len(array)
    for (var i = 0; i < k; i++) {
        if (fn(array[i]))
            return i;
    }
    return undefined;
}

//sum function

function sum(array: Array<any>){
    let sum = 0;
    for (let i of array){
        sum += i;
    }
    return sum;
}

//compact implementation

function compct(arr:Array<any>){
    let cmpctarr:Array<Number> = []
    arr.forEach(item => {
        if(item != false && item != null && item != 0 && item != "" && item != undefined && (item == item)){
            cmpctarr.push(item)
        }
    });
    return cmpctarr;
}