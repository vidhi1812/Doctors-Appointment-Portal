const mongoose=require("mongoose");
const URL=process.env.MONGODB_URL;
const connectMongoDB=async()=>{
    try{
        await mongoose.connect(URL);
        console.log("Connect to the Database");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectMongoDB;