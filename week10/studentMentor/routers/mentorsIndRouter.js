const express = require("express")
const students = require("../students")
const mentors = require("../mentors")

const mentorIndRouter = express.Router();

mentorIndRouter
.get("/",(req,res)=>{ //getting students of a specific mentor
    let alldata = mentors.find(
            (mentor) => mentor.id === parseInt(req.mentorId)
        )
    res.status(200).json({
        data: alldata.students
    })
})
.post("/",(req,res)=>{  //add students to a specific mentor
    let noMentorStud = students.filter(
        (student) => student.MentorName === "NA"
    )              
    let studs = []
    noMentorStud.forEach((student)=>{
        studs.push(student.Name)
    })
    let ment = mentors.find(
        (mentor) => mentor.id === parseInt(req.mentorId)
    )
    console.log(req.body.students)
    console.log(studs)
    req.body.students.forEach((student)=>{
        if(studs.includes(student.Name)){
            ment.students.push(student.Name)   
        }
        else{
        res.status(404).json({
            status:"failed"
        })
        res.end("<h1>student already have mentor or invalid data</h1>")
        }
    })
    res.end("<h1>students Added Successfully</h1>")
            res.status(200).json({
            status:"success" 
 
})
})

module.exports = mentorIndRouter 