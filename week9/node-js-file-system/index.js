const fs = require("fs");
const dateTime = require("date-time");
const bodyParser = require("body-parser");
const express =  require("express")
const path = require("path")
const app = express()


app
    .get("/files",(req,res)=>{
        let lst = ""
        fs.readdir(__dirname, (err, files) => { 
            if (err) 
              console.log(err); 
            else { 
              console.log("Created Files"); 
              files.forEach(file => { 
                if (path.extname(file) == ".txt") //to read the files with .txt extension
                  lst += `<h4>${file}</h4><br>`
              })
              res.send(lst)  
            }
          }) 
    })
    .post("/createFile",(req,res)=>{
        let fname = dateTime().toString()
        let date_time = dateTime().split(" ");
        let [date, time] = [date_time[0], date_time[1]]
        time = time.split(":").join("-"); //semicolons are not allowed in filename
        fs.writeFile(path.join(__dirname, `${date+'--'+time}.txt`),`${fname}`,function(err){
        if(err) throw err;
        console.log("file created")
        res.send("<h1>file creation succesfull</h1>")
        })
    })
    .listen(process.env.PORT)
    
