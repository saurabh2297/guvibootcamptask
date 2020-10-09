function elemCreate(a,b){
    var x = document.createElement(a);
    x.classList.add(b);
    return x;
}

var br = document.createElement("BR")

function textCreate(txt){
    var t = document.createTextNode(txt);
    return t;
}

var h1 = elemCreate('H1');
var inH1= textCreate('SAURABH GANGWAR')
h1.appendChild(inH1);
document.body.append(h1);

var div1 = elemCreate('DIV','c1');
document.body.append(div1);

var img1 = elemCreate('IMG','dp');
img1.setAttribute("src", "img.jpg");
img1.setAttribute("alt", "profile_pic");
div1.appendChild(img1);

var div2 = elemCreate('DIV','c2')
document.body.append(div2);

var div3 = elemCreate('DIV','c3')
document.body.append(div3);

var label1 = elemCreate("LABEL",'sub');
var inLabel1 = textCreate("18 Tulsi Nagar, Bareilly (UP) | 091-8171154464 | saurabhgangwar621@gmail.com | https://github.com/saurabh2297");
label1.appendChild(inLabel1);
document.body.append(label1);

document.body.appendChild(br)

var table1 = elemCreate('TABLE','t1')
var tr1 = document.createElement("TR")
var td1 = elemCreate('TD','ico')
var i1 = elemCreate('I','material-icons')
var inI1 = textCreate('person_pin')
i1.appendChild(inI1)
td1.appendChild(i1)
var td2 = document.createElement('TD')
var p1 = elemCreate('P','subhead')
var inP1= textCreate('Profile')
p1.appendChild(inP1);
td2.appendChild(p1)
tr1.appendChild(td1)
tr1.appendChild(td2)

var tr2 = document.createElement("TR")
var td3 = elemCreate('TD','content')
var inTD3= textCreate('reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum')
td3.setAttribute("colspan",'2')
td3.appendChild(inTD3)
tr2.appendChild(td3)

var tr3 = document.createElement("TR")
var td4 = elemCreate('TD','ico')
var i2 = elemCreate('I','material-icons')
var inI2 = textCreate('settings')
i2.appendChild(inI2)
td4.appendChild(i2)
var td5 = document.createElement('TD')
var p2 = elemCreate('P','subhead')
var inP2= textCreate('Skills')
p2.appendChild(inP2);
td5.appendChild(p2)
tr3.appendChild(td4)
tr3.appendChild(td5)

var tr4 = document.createElement("TR")
var td6 = elemCreate('TD','subhead2')
td6.setAttribute("colspan",'2')
var inTd6 = textCreate('Technical Skills')
td6.appendChild(inTd6)
tr4.appendChild(td6)

var tr5 = document.createElement('TR')
var td7 = elemCreate('TD','skill_name')
var inTd7 = textCreate('Javascript')
td7.appendChild(inTd7)
td7.appendChild(br)
inTd7 = textCreate('CSS')
var br1 = document.createElement('BR')
td7.appendChild(inTd7)
td7.appendChild(br1)
var br2 = document.createElement('BR')
intd7 = textCreate('HTML')
td7.append(intd7)
td7.appendChild(br2)
var br3 = document.createElement('BR')
intd7 =  textCreate('React')
td7.append(intd7)
td7.appendChild(br3)
var br4 = document.createElement('BR')
intd7 =  textCreate('Redux')
td7.append(intd7)
td7.appendChild(br4)
intd7 =  textCreate('Mongo')
td7.append(intd7)
var td8 = elemCreate('TD','slider')
for(let i=0;i<6;i++){
    var ip = elemCreate('INPUT','bar')
    ip.setAttribute('type','range')
    ip.setAttribute('min','1')
    ip.setAttribute('max','100')
    ip.setAttribute('value','67')
    ip.disabled = true;
    td8.appendChild(ip)
}
tr5.appendChild(td7)
tr5.appendChild(td8)

var tr6 = document.createElement("TR")
var td9 = elemCreate('TD','subhead2')
td9.setAttribute("colspan",'2')
var inTd9 = textCreate('Additional Skills')
td9.appendChild(inTd9)
tr6.appendChild(td9)

var tr7 = document.createElement('TR')
var td10 = elemCreate('TD','skill_name')
var inTd10 = textCreate('Development')
td10.appendChild(inTd10)
td10.appendChild(br)
inTd10 = textCreate('Management')
var br1 = document.createElement('BR')
td10.appendChild(inTd10)
td10.appendChild(br1)
var br2 = document.createElement('BR')
intd10 = textCreate('Recruitment')
td10.append(intd10)
td10.appendChild(br2)
var br3 = document.createElement('BR')
intd10 =  textCreate('Editing')
td10.append(intd10)

var td11 = elemCreate('TD','slider')
for(let i=0;i<4;i++){
    var ip = elemCreate('INPUT','bar')
    ip.setAttribute('type','range')
    ip.setAttribute('min','1')
    ip.setAttribute('max','100')
    ip.setAttribute('value','87')
    ip.disabled = true;
    td11.appendChild(ip)
}
tr7.appendChild(td10)
tr7.appendChild(td11)

var tr8 = document.createElement("TR")
var td12 = elemCreate('TD','ico')
var i3 = elemCreate('I','material-icons')
var inI3 = textCreate('business_center')
i3.appendChild(inI3)
td12.appendChild(i3)
var td13 = document.createElement('TD')
var p3 = elemCreate('P','subhead')
var inP3= textCreate('Work Experience')
p3.appendChild(inP3);
td13.appendChild(p3)
tr8.appendChild(td12)
tr8.appendChild(td13)

var tr9 = document.createElement('TR')
var td13 = elemCreate('TD','content')
td13.setAttribute('colspan','2')
var intd13 = textCreate('Systems Engineer')
var s1 = elemCreate('SPAN','dt')
var inS1 = textCreate('9/2019-09/2020')
s1.appendChild(inS1)
var s2 = elemCreate('SPAN','subspan')
var inS2 = textCreate('Pune,Maharashtra')
s2.appendChild(inS2)
var ul1 = document.createElement("UL")
for(let i=0;i<3;i++){
    var li = document.createElement('LI')
    var inLi = textCreate('reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,')
    li.appendChild(inLi)
    ul1.appendChild(li)
    ul1.appendChild(br)
}
td13.appendChild(intd13)
td13.appendChild(s1)
var br6 = document.createElement("BR")
td13.appendChild(br6)
td13.appendChild(s2)
td13.appendChild(ul1)
tr9.appendChild(td13)


table1.appendChild(tr1)
table1.appendChild(tr2)
table1.appendChild(tr3)
table1.appendChild(tr4)
table1.appendChild(tr5)
table1.appendChild(tr6)
table1.appendChild(tr7)
table1.appendChild(tr8)
table1.appendChild(tr9)

var table2 = elemCreate('TABLE','t2')

var tr10 = document.createElement("TR")
var td14 = elemCreate('TD','ico')
var i4 = elemCreate('I','material-icons')
var inI4 = textCreate('business_center')
i4.appendChild(inI4)
td14.appendChild(i4)
var td15 = document.createElement('TD')
var p4 = elemCreate('P','subhead')
var inP4= textCreate('Work Experience')
p4.appendChild(inP4);
td15.appendChild(p4)
tr10.appendChild(td14)
tr10.appendChild(td15)

var tr11 = document.createElement('TR')
var td16 = elemCreate('TD','content')
td16.setAttribute('colspan','2')
var intd16 = textCreate('Systems Engineer')
var s3 = elemCreate('SPAN','dt')
var inS3 = textCreate('9/2019-09/2020')
s3.appendChild(inS3)
var s4 = elemCreate('SPAN','subspan')
var inS4 = textCreate('Pune,Maharashtra')
s4.appendChild(inS4)
var ul2 = document.createElement("UL")
for(let i=0;i<3;i++){
    var li = document.createElement('LI')
    var inLi = textCreate('reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,')
    li.appendChild(inLi)
    ul2.appendChild(li)
    ul2.appendChild(br)
}
td16.appendChild(intd16)
td16.appendChild(s3)
var br5 = document.createElement("BR")
td16.appendChild(br5)
td16.appendChild(s4)
td16.appendChild(ul2)
tr11.appendChild(td16)

var tr12 = document.createElement("TR")
var td17 = elemCreate('TD','ico')
var i5 = elemCreate('I','material-icons')
var inI5 = textCreate('mode_edit')
i5.appendChild(inI5)
td17.appendChild(i5)
var td18 = document.createElement('TD')
var p5 = elemCreate('P','subhead')
var inP5= textCreate('Education')
p5.appendChild(inP5);
td18.appendChild(p5)
tr12.appendChild(td17)
tr12.appendChild(td18)

var tr13 = document.createElement('TR')
var td19 = elemCreate('TD','content')
td19.setAttribute('colspan','2')
var intd19 = textCreate('B.Tech (C.S.E)')
var s5 = elemCreate('SPAN','dt')
var inS5 = textCreate('8/2015-06/2019')
s5.appendChild(inS5)
var s6 = elemCreate('SPAN','subspan')
var inS6 = textCreate('Ghaziabad,Uttar Pradesh')
s6.appendChild(inS6)
var ul3 = document.createElement("UL")
for(let i=0;i<3;i++){
    var li = document.createElement('LI')
    var inLi = textCreate('reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,')
    li.appendChild(inLi)
    ul3.appendChild(li)
    ul3.appendChild(br)
}
td19.appendChild(intd19)
td19.appendChild(s5)
td19.appendChild(br)
td19.appendChild(s6)
td19.appendChild(ul3)
tr13.appendChild(td19)

table2.appendChild(tr10)
table2.appendChild(tr11)
table2.appendChild(tr12)
table2.appendChild(tr13)

document.body.append(table1)
document.body.append(table2)
