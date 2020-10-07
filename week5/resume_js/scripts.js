function dis(val){
    document.getElementById("result").value+=val;
}

function clr(){
    document.getElementById("result").value="";
}
function solve(){
    x = document.getElementById("result").value;
    y = eval(x);
    document.getElementById("result").value = y;
}
