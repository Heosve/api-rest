/** dto */

const vehicleDto = require("../../model/dto/vehicle.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config");

/**Helper */
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

exports.createvehicle = (req, res, next) =>{
    console.log(req.body);
    console.log("llegue")
    let car = {
        motorserial: req.body.motorserial,
        brand: req.body.brand,
        color: req.body.color,
        model: req.body.model,
        chasisserial: req.body.chasisserial,
        generation: req.body.generation,
        cylindercapacity:req.body.cylindercapacity
    };
    vehicleDto.create(car, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        let r = config.get("roles").vehicle;
        let user = {
            name: car.brand,
            lastname: car.model,
            username: car.chasisserial,
            password: helper.EncryptPassword(req.body.password),
            rol: r
        }
        userDto.create(user, (err, u) => {
            if(err){
                vehicleDto.delete({_id: data._id}, (err, data) =>{
                    console.log
                })//("Deleting due to not user creation.")
                return res.status(400).json(
                    {
                        error: err
                    }
                )
            }
            notHelper.sendSMS(car.motorserial);
            res.status(201).json(
                {
                    info: data
                }
            );
        });
    });
};

exports.updatevehicle = (req, res, next) =>{
    let car = {
        motorserial: req.body.motorserial,
        brand: req.body.brand,
        color: req.body.color,
        model: req.body.model,
        chasisserial: req.body.chasisserial,
        generation: req.body.generation,
        cylindercapacity:req.body.cylindercapacity
    };
    vehicleDto.update({_id: req.body.id}, car, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) =>{
    
    vehicleDto.getAll({}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.getmotorserial = (req, res, next) =>{
    
    vehicleDto.getmotorserial({motorserial: req.params.motorserial}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deletevehicle = () =>{
    vehicleDto.delete({_id: req.body.id}, (err, data)=> {
        if(err){
            return res.status(400).json(
                {
                    error: er
                }
            );
        }
        res.status(204).json();
    });
}