function len(arr) {
    var i = 0;
    while (arr[i] != undefined) {
        i++;
    }
    return i;
}
//chunk implementation
function chnk(arr, num) {
    var k = len(arr);
    var tempArr = [];
    var mainArr = [];
    for (var i = 0; i < k; i++) {
        tempArr.push(arr[i]);
        if (len(tempArr) == num || i == k - 1) {
            mainArr.push(tempArr);
            tempArr = [];
        }
    }
    return mainArr;
}
//reduce implementation
function reduce(arr, fn) {
    var result = 0;
    for (var i in arr) {
        result = fn(result, arr[i]);
    }
    return result;
}
//filter implementation
function filter(array, fn) {
    var filarr = [];
    for (var i in array) {
        if (fn(array[i]))
            filarr.push(array[i]);
    }
    return filarr;
}
//find function
function find(array, fn) {
    var k = len(array);
    for (var i = 0; i < k; i++) {
        if (fn(array[i]))
            return i;
    }
    return undefined;
}
//sum function
function sum(array) {
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        sum += i;
    }
    return sum;
}
//compact implementation
function compct(arr) {
    var cmpctarr = [];
    arr.forEach(function (item) {
        if (item != false && item != null && item != 0 && item != "" && item != undefined && (item == item)) {
            cmpctarr.push(item);
        }
    });
    return cmpctarr;
}
