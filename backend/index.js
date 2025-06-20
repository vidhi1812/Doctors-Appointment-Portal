const router= require('express').Router();
const authRoute=require("./routes/auth/authRoute")
const userRoute=require('./routes/user/userRoute')
const reportRoute = require('./routes/report/reportRoute');
router.use('/auth',authRoute)
router.use('/user',userRoute)
router.use('/report',reportRoute)
router.use((req,res)=>{
    console.warn(
        `404 Not found. Id:${req.identifier} ${req.url} ${method} ${req.header['user-agent']}
        ${JSON.stringify(req.body)}`,
        'warn'
    )

    return res.status(404).json({
        success:false,
        message:"404 Not Found"
})
});

module.exports=router