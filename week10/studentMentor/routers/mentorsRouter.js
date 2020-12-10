const express = require("express")
const mentors = require("../mentors")

const mentorsRouter = express.Router();

mentorsRouter
.get("/",(req,res)=>{ //to get all the mentores
    res.status(200).json({
        data: mentors,
    })
})
.post("/",(req,res)=>{ //creating a mentor
    req.body.mentors.forEach((mentor)=>{
        if(mentor.id && mentor.Name && mentor.Age){
            mentor.students = []
            mentors.push(mentor)
            res.end("<h1>mentor Added Successfully</h1>")
            res.status(200).json({
            status:"success"
        })
        }else{
        res.status(404).json({
            status:"failed"
        })
        res.end("<h1>Invalid/Incomplete Data</h1>")
        }
    })    
})
    

module.exports = mentorsRouter