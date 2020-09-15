var input = document.getElementById('input');
var name = document.getElementById('name');
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');
var button= document.getElementById('submit');


button.addEventListener('click', function(name){
    var request = new XMLHttpRequest()
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f1e34f3af6ed32aa75b30c0448ae574b', true);
    request.send();
    request.onload = function() {
        if (request.status != 200) { 
            alert('city not found'); 
          }
        else{
        var data = JSON.parse(this.response);
        
        var tempVal = data['main']['temp'];
        var nameVal = data['name'];
        var descVal = data['weather'][0]['description'];

        name.innerHTML = nameVal;
        desc.innerHTML = "Desc - "+descVal;
        temp.innerHTML = "Temp - "+tempVal;}
        input.value ="";
        }
    
})