const express = require("express")
const students = require("../students")

const studentIndRouter = express.Router();

studentIndRouter
.post("/",(req,res)=>{ //to add or change mentor of a student
    let stud = students.find(
        (student) =>{ 
        if(student.id === parseInt(req.studentId)){
            return student
        }
    })
    stud.MentorName = req.body.mentor
    res.end("<h1>Mentor changed/added Successfully</h1>")
    })

module.exports = studentIndRouter 