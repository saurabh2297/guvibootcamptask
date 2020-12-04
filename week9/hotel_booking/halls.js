const halls = [{
    Room_id:1,
    RoomName: "Deluxe",
    NoOfSeats:20,
    PricePerHr:500,
    amenities:["Non-AC"],
    bookedStatus: "Available",
    bookingDetails:{}
},
{
    Room_id:2,
    RoomName: "King",
    NoOfSeats:50,
    PricePerHr:699,
    amenities:["Balcony","AC"],
    bookedStatus: "Available",
    bookingDetails:{}
},
{
    Room_id:3,
    RoomName: "Royal",
    NoOfSeats:10,
    PricePerHr:750,
    amenities:["Bathtub","Balcony","AC"],
    bookedStatus: "Booked",
    bookingDetails: {
    CustomerName:"Saurabh",
    Date:"20/7/20",
    StartTime: 0900,
    EndTime:  1300}
},
{
    Room_id:4,
    RoomName: "Premium",
    NoOfSeats:90,
    PricePerHr:900,
    amenities:["Home Theatre","Balcony","Bathtub","AC"],
    bookedStatus: "Available",
    bookingDetails:{}
}
]


module.exports = halls