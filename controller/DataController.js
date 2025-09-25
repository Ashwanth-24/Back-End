
var Datas = require('../Models/DatasModels');

// Adding Data
 const addNew = async (req,res) => {
    const {name, email, password, contact} = req.body;
    const data = new Datas({ 
        name, 
        email, 
        password, 
        contact 
    });
    try {
        const result = await data.save();
        res.send(result); 
    } 
    catch (error) {
        console.log(error);
        res.send(`This data can't be saved :${error}`);
    }
 }; 

// View Data
var viewNew = async (req,res) =>{
    try{
        var result = await Datas.find()
        res.send(result);
    }
    catch(err){
        res.send(err);
        console.log(err);
    }
};

// ViewById
var viewById = async (req,res) =>{
    const Id = req.params.id;
    console.log(Id);
    
    try{
        var result = await Datas.findById(Id);
        res.json({data:result});
    }
    catch(err){
        res.send(err);
        console.log(err);
    }
};

// viewByName
var viewByName = async (req,res) =>{
    const Name = req.params.name;
    console.log(Name);
    
    try{
        var result = await Datas.find({name:Name});
        res.json({data:result});
    }
    catch(err){
        res.send(err);
        console.log(err);
    }
};

// Updating the data
var Update = async (req,res) =>{
    const Id = req.params.id;
    const UpdateData = req.body;

    try{
        var result = await  Datas.findByIdAndUpdate(Id, UpdateData,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
            data:result, 
            msg:"Success",
        });
    }
    catch(err){
        res.send(err);
        console.error(err);
    } 
};

// Delete
var Delete = async (req,res) =>{
    const Id = req.params.id;

    try{
        var result = await Datas.findByIdAndDelete(Id);
        res.status(200).json({
            data:result, 
            msg:"Successfully Deleted",
        });
    }
    catch(err){
        res.send(err);
        console.error(err);
    } 
};

// bcrypt
const bcrypt = require("bcrypt");
// var Datas = require('../Models/DatasModels');

const Userbcrypt = async (req,res) =>{
    const {name, email, password, contact} = req.body;
    const hashpassword = await bcrypt.hash(password, 10);

    const NewUser = new Datas({
        name, 
        email, 
        password:hashpassword, 
        contact 
    });

    try{
        var result = await NewUser.save();
        res.status(200).json({
            msg:"User register Success !",
            data:result
        });
    }
    catch(err){
        res.send(eer);
        console.error(err)
    }

};


const UserCompare = async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await Datas.findOne({email});
        
        const isMatch = await  bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(404).json({msg:"password is not match"});

        res.status(200).json({msg:"Login Successfull",
            data:isMatch
        })
    }
    catch(err){
        res.status(404).json({mes:"Login Fail...!",
            data:err
        });
    }

}

module.exports = {addNew, viewNew, viewById, viewByName, Update, Delete, Userbcrypt, UserCompare};
  