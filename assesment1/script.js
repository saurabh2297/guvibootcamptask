document.getElementById("myForm").addEventListener("submit", check);

function check(){
    console.log("1")
    for(let i=1;i<=8;i++){
        let x = document.getElementById(i)
        if(x.value == null){
            x.classList.add('error')
            alert("This field can't be left empty")
        }
    }
    alert("form succcesfully submitted")
}
