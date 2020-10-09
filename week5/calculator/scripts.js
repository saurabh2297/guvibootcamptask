document.addEventListener('keypress', keyP);
function keyP(e) {
  var x = document.getElementById(e.key)
  if(x!=null){
      x.click()
  }
  else{
      alert("invalid input")
  }
  
}

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
