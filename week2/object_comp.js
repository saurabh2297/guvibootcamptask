//comparing js objects having key,value pairs in different order


var obj1 = {"name":"GUVI","class":"FS"};
var obj2 = {"class":"FS","name":"GUVI"};


function cmp(obj1,obj2){
    if(Object.keys(obj2).sort().toString() === Object.keys(obj1).sort().toString()) // verified if both have same keys
        {
            //comparing  values key-wise
            for(var i in obj1){
            if(obj1[i]!= obj2[i]){
                return false
            }
        }
        return true;
    }
    else{
        return false;
    }
}

//or we can do using lodash _isEqual function also.
