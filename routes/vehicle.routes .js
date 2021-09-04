const controller=require("../controller/logic/vehicle.controller")

module.exports = (app) =>{
    app.get("/vehicle",(req,res,next)=>{
        controller.getAll(req,res,next);
    });

    app.get("/vehicle/motorserial/:motorserial",(req,res,next)=>{
        console.log("getting vehicle by motorserial");
        controller.getmotorserial(req,res,next);
    });
    
    app.post("/vehicle",(req,res,next)=>{
        controller.createvehicle(req,res,next);
    });

    app.put("/vehicle",(req,res,next)=>{
        controller.updatevehicle(req,res,next);
    });

    app.delete("/vehicle",(req,res,next)=>{
        controller.deletevehicle(req,res,next);
    });
};