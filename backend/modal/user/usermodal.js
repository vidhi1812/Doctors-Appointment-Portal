const mongoose=require('mongoose');

const userRecords= new mongoose.Schema({
name:{type:String, require:true},
email:{type:String, require:true, unique:true},
phoneNumber:{type:String, require:true, unique:true},
password:{type:String, require:true},
role:{
    type:String,
    enum:["admin","doctor","patient"],
    default:patient
}

});

const user=mongoose.model("user",userRecords);
module.exports=user