const mongoose = require("mongoose");
const validator=require('validator')

const UserSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    middlename:{type:string},
    lastname:{type:String,required:true},
    email:{type:String,required:true,
       validate:(value)=>{ validator.isEmail(value)}                         },
    password:{type:String,required:true},
    status:{type:String,default:"y"},
    createdat:{type:Date,default:Date.now()}

})
const UserModel=mongoose.model("user",UserSchema)
module.exports={UserModel};
