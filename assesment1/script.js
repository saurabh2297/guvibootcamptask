let $form = document.querySelector("#myForm")

$form.addEventListener("submit",function(event){
    event.preventDefault();
    for(let i=1;i<=8;i++){
        let x = document.getElementById(i)
        console.log(x.value)
        if(!x.value){
            x.classList.add("error")
            alert("This field can't be left empty")
            return 0;
        }
        if(i== 8){
            if(x.value>9999999999){
                x.classList.add("error")
                alert("Phone number can be of max 10 digits ")
                return 0;
            }
        }
    }
    alert("form succcesfully submitted")
});


setInterval(function(){ 
    
    for(let i=1;i<=8;i++){
        let x = document.getElementById(i)
        if(i==8){
            if(x.value<=9999999999){
                x.classList.remove("error")
            }
        }
        if(x.value){
            if(i==8){continue;}
            x.classList.remove("error")
        }
    }
 }, 1000);
