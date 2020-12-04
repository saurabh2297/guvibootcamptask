const express =  require("express")
const bodyParser = require("body-parser")
const halls = require("./halls")

const app = express()

app
    .use(bodyParser.json())
    .get("/halls",(req,res)=>{ //to get all the rooms
        res.status(200).json({
            data: halls,
        })
    })
    .post("/createHall",(req,res)=>{ //creating a hall
        req.body.halls.forEach((hall)=>{
            if(hall.Room_id && hall.amenities && hall.PricePerHr && hall.RoomName && hall.NoOfSeats){
                hall.bookedStatus = "Available";
                hall.bookingDetails = {}
                halls.push(hall)
                res.end("<h1>hall Added Successfully</h1>")
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
    .get("/halls/:id",(req,res)=>{ //getting room by id
        res.status(200).json({
            data: halls.find(
                (hall) => hall.Room_id === parseInt(req.params.id)
            ),
        });
    })
    .get("/booked",(req,res)=>{       //get all booked rooms                
        res.status(200).json({
            data: halls.filter(
                (hall)=> hall.bookedStatus === "Booked"
            )
        })
     
    })
    .get("/available",(req,res)=>{ //get all  available rooms
        res.status(200).json({
            data: halls.filter(
                (hall)=>hall.bookedStatus === "Available"
            )
        })
    })
    .post("/bookhall",(req, res)=>{             
        console.log(req.body.bookhalls)    
               //Book a Hall from Available Halls
        var flag = 1;
        req.body.bookhalls.forEach((bookhall)=>{
        data: halls.forEach(
            (hall)=>{ 
                if(hall.Room_id === +bookhall.id){
                    if(hall.bookedStatus === "Available"){
                        hall.bookedStatus = "Booked"
                        
                        const details = {
                            CustomerName:bookhall.CustomerName,
                            Date:bookhall.Date,
                            StartTime:bookhall.StartTime,
                            EndTime:bookhall.EndTime
                        }
                        
                        hall.bookingDetails = details;
                        res.status(200)
                        flag = 0; 
                        res.end("Booked Successfully") 
                    }else{
                        res.end("Sorry...Already Booked") 
                    }

                }
            })
            if(flag ===1){
    
                res.end("Hall Not Found.. Enter valid ID")
            }
        

    })
})


    .listen(process.env.PORT)