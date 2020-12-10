const express =  require("express")
const bodyParser = require("body-parser")
const studentsRouter = require("./routers/studentsRouter")
const mentorsRouter = require("./routers/mentorsRouter")
const studentIndRouter = require("./routers/studentsIndRouter");
const mentorIndRouter = require("./routers/mentorsIndRouter");
const app = express()

app
    .use(bodyParser.json())
    .use("/students",studentsRouter)
    .use("/mentors",mentorsRouter)
    .use("/students/:id",
    (req,res,next)=>{ 
        // internal handler to get the params
        req.studentId = req.params.id;
        next();
    },
    studentIndRouter
    )
    .use("/mentors/:id",
    (req,res,next)=>{ 
        // internal handler to get the params
        req.mentorId = req.params.id;
        next();
    },
    mentorIndRouter
    )   
    .listen(8001)