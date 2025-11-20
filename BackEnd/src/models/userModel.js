const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        Type:String,
        required:true,
        unique:true
    },
    passsword:{
        type:String,
        required:true
    },isAdmin:{
        type:Boolean,
        default:false,
        required:true
    }
})
const User=mongoose.model('User',userSchema);

module.exports=User;