const express = require("express")
const students = require("../students")
const mentors = require("../mentors")

const studentsRouter = express.Router();

studentsRouter
    .get("/",(req,res)=>{ //to get all the students
        res.status(200).json({
        data: students,
        })
    })
    .post("/",(req,res)=>{ //creating a student (one student at a time)
        req.body.students.forEach((student)=>{
            if(student.id && student.Name && student.Batch && student.Age){
                student.MentorName = "NA";
                students.push(student)
                res.end("<h1>studnet Added Successfully</h1>")
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
    .patch("/",(req,res)=>{
        //to edit students
    })
    .delete("/students",(req,res)=>{
        //to delete students
    })

module.exports = studentsRouter