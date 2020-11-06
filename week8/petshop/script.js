function elemCreate(a, b) {
    var x = document.createElement(a);
    for (let i = 0; i < b.length; i++) { x.classList.add(b[i]); }
    return x;
  }

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var cont1 = document.querySelector('#content1')

var btn1 = elemCreate('BUTTON',['btn','btn-warning'])
btn1.innerHTML = "Available"
btn1.addEventListener("click", function() {petList()});

var btn2 = elemCreate('BUTTON',['btn','btn-dark'])
btn2.innerHTML = "Add Pet"
btn2.addEventListener("click", function() {addPet()});
btn2.style.margin = "2%"
btn2.style.marginTop = "3%"

var btn3 = elemCreate('BUTTON',['btn','btn-primary'])
btn3.innerHTML = "Request Pets"
btn3.addEventListener("click", function() {reqPet()});

var btn4 = elemCreate('BUTTON',['btn','btn-success'])
btn4.innerHTML = "Request Status"
btn4.addEventListener("click",function(){reqStat()});

var btn5 = elemCreate('BUTTON',['btn','btn-success'])
btn5.innerHTML = "Top 5 Request Stat"
btn5.addEventListener("click",function(){reqStat5()});

var btn6 = elemCreate('BUTTON',['btn','btn-danger'])
btn6.innerHTML = "Add Pet"
btn6.addEventListener('click',function(){home()});

var btn7 = elemCreate("BUTTON",['btn','btn-dark'])
btn7.innerHTML = "Request Pet"
btn7.addEventListener("click", function() {reqsPet()});
btn7.style.margin = "2%"
btn7.style.marginTop = "3%"

cont1.append(btn3,btn1,btn4,btn5)

var cont2 = document.querySelector('#content2')

cont2.appendChild(btn2)

var frm = document.querySelector('#frm')

function home(){
  removeAllChildNodes(cont1)
  cont1.append(btn1,btn3,btn4,btn5)
  removeAllChildNodes(cont2)
  cont2.append(frm) 
  cont2.appendChild(btn2)
}

function petList(){
  cont1.append(btn6,btn3,btn1,btn4,btn5)
  cont1.removeChild(btn1)
  removeAllChildNodes(cont2)
  var tbl1 = elemCreate("TABLE",["table"])
  var thead1 = elemCreate("thead" ,["table-dark"])
  var tr1 = elemCreate("tr",[])
  var th1 = elemCreate("th",[])
  th1.innerHTML = "Category"
  var th2 = elemCreate("th",[])
  th2.innerHTML = "Name"
  var th3 = elemCreate("th",[])
  th3.innerHTML = "Gender"
  var th4 = elemCreate("th",[])
  th4.innerHTML = "Age"
  tr1.append(th1,th2,th3,th4)
  thead1.append(tr1)
  tbl1.appendChild(thead1)
  
  for(let i=0;i<petArr.length;i++){
    var tr = elemCreate("tr",[])
   
    var td1 = elemCreate("td",[])
    td1.innerHTML = petArr[i].typeV;
    var td2 = elemCreate("td",[])
    td2.innerHTML = petArr[i].nameV;
    var td3 = elemCreate("td",[])
    td3.innerHTML = petArr[i].genderV;
    var td4 = elemCreate("td",[])
    td4.innerHTML = petArr[i].ageV;
    tr.append(td1,td2,td3,td4)
    tbl1.appendChild(tr)
  }

  
  cont2.append(tbl1)
}

function addPet(){
  cont1.append(btn1,btn3,btn4,btn5)
  removeAllChildNodes(cont2)
  cont2.append(frm)
  var Category = document.querySelector('#Category')
  var Name = document.querySelector('#Name')
  var Gender = document.querySelector('#Gender')
  var Age = document.querySelector('#Age')

  new PetAvail({typeV:Category.value,nameV:Name.value,ageV:Age.value,genderV:Gender.value})
  petList()

}

var frm2 = document.querySelector('#frm2')

function reqPet(){
  cont1.append(btn6,btn1,btn3,btn4,btn5)
  cont1.removeChild(btn3)
  removeAllChildNodes(cont2)
  frm2.style.display = "block"
  cont2.append(frm2,btn7)
}

function reqsPet(){
    var dogCount = document.querySelector('#dogC')
    var catCount = document.querySelector('#catC')
    var parrotCount = document.querySelector('#parC')
    var rabbitCount = document.querySelector('#rabC')
    req.insertReq({'Dog':dogCount.value,'Cat':catCount.value,'Parrot':parrotCount.value,'Rabbit':rabbitCount.value}) 
    reqStat()  
}



function reqStat(){
  cont1.append(btn6,btn1,btn3,btn4,btn5)
  cont1.removeChild(btn4)
  req.reqStatus()
  removeAllChildNodes(cont2)
  var tbl1 = elemCreate("TABLE",["table"])
  var thead1 = elemCreate("thead" ,["table-dark"])
  var tr1 = elemCreate("tr",[])
  var thcnt = elemCreate("th",[])
  thcnt.innerHTML = "Id"
  thcnt.scope = "col"
  var th1 = elemCreate("th",[])
  th1.innerHTML = "Request"
  th1.scope = "col"
  var th5 = elemCreate("th",[])
  th5.innerHTML = "Status"
  th5.scope = "col"
  tr1.append(thcnt,th1,th5)
  thead1.append(tr1)
  tbl1.appendChild(thead1)
  
  for(let i=0;i<reqArr.length;i++){
    var tr = elemCreate("tr",[])
    var th = elemCreate("th",[])
    th.scope = "row";
    th.innerHTML = (i+1).toString()
    var td1 = elemCreate("td",[])
    td1.innerHTML = "Dog: "+reqArr[i]['Dog']+",Cat: "+reqArr[i]['Cat']+",Parrot: "+reqArr[i]['Parrot']+",Rabbit: "+reqArr[i]['Rabbit'];
    var td5 = elemCreate("td",[])
    td5.style.fontWeight = 'bolder';
    td5.style.color = 'white'
    if(reqStatus[i]==true){
    td5.innerHTML = "Available";
    td5.style.backgroundColor = '#ADFF2F'}
    else{
      td5.innerHTML = "Not Available";
      td5.style.backgroundColor = '#CD5C5C'
    }
    tr.append(th,td1,td5)
    tbl1.appendChild(tr)
  }

  
  cont2.append(tbl1)
}

function reqStat5(){
  cont1.append(btn6,btn1,btn3,btn4,btn5)
  cont1.removeChild(btn5)
  req.reqStatus()
  removeAllChildNodes(cont2)
  var tbl1 = elemCreate("TABLE",["table"])
  var thead1 = elemCreate("thead" ,["table-dark"])
  var tr1 = elemCreate("tr",[])
  var thcnt = elemCreate("th",[])
  thcnt.innerHTML = "Id"
  thcnt.scope = "col"
  var th1 = elemCreate("th",[])
  th1.innerHTML = "Request"
  th1.scope = "col"
  var th5 = elemCreate("th",[])
  th5.innerHTML = "Status"
  th5.scope = "col"
  tr1.append(thcnt,th1,th5)
  thead1.append(tr1)
  tbl1.appendChild(thead1)
  
  for(let i=0;i<reqArr.length;i++){
    var tr = elemCreate("tr",[])
    var th = elemCreate("th",[])
    th.scope = "row";
    th.innerHTML = (i+1).toString()
    var td1 = elemCreate("td",[])
    td1.innerHTML = "Dog: "+reqArr[i]['Dog']+",Cat: "+reqArr[i]['Cat']+",Parrot: "+reqArr[i]['Parrot']+",Rabbit: "+reqArr[i]['Rabbit'];
    var td5 = elemCreate("td",[])
    td5.style.fontWeight = 'bolder';
    td5.style.color = 'white'
    if(reqStatus[i]==true){
    td5.innerHTML = "Available";
    td5.style.backgroundColor = '#ADFF2F'}
    else{
      td5.innerHTML = "Not Available";
      td5.style.backgroundColor = '#CD5C5C'
    }
    tr.append(th,td1,td5)
    tbl1.appendChild(tr)
    if(i==5){
      break;
    }
  }

  
  cont2.append(tbl1)
}








