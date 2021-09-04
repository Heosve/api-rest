/**packages */
const mongoose=require("mongoose");
const validator=require("mongoose-unique-validator");

const vehicleSchema= new mongoose.Schema({
    motorserial:{
        type:"String",
        required:true,
        unique:true  
    },
    brand:{
        type:"String",
        required:true 
    },
    color:{
        type:"String",
        required:true 
    },
    model:{
        type:"String",
        required:true,
        unique:true
    },
    chasisserial:{
        type:"String",
        required:true
    },
    generation:{
        type:"String",
        required:true 
    },
    cylindercapacity:{
        type:"String",
        required:true 
    },
    
}); 
/** schema exportation */
module.exports=vehicleSchema;