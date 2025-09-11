
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashwanth24:249002%40Sas@cluster0.vcz5gcd.mongodb.net/')
.then(()=>{
    console.log("DB is Connected") 
}).catch((error)=>{
    console.log("Fatching error", error);
})

  