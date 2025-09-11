const Joi = require('joi');

const loginSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
    contact: Joi.number().min(10).required()
}); 

const userValidation = async (req,res,next) =>{
    
    var DataValidation = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact
    }
    console.log(DataValidation);
    
    var err = loginSchema.validate(DataValidation);
    console.log(err);
    if(err.error){
        var result = err.details;
        console.log(result);
        
        res.status(404).json({msg:'UnAuthorized User...!', error:result});
    }
    else{
        next();
    }
};

module.exports = {userValidation};