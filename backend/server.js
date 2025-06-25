require("dotenv").config();
const express= require("express")
const cors=require("cors")
// const morgon=require("morgon")
const http=require("http")
const package=require("./package.json")
// const cookieParser=require("cookieParser")
const bodyParser=require("body-parser")
const rateLimit=require("express-rate-limit")
const port=process.env.PORT || 8000
const app=express()
const connectDb =require("./config/dB.js")
const server= http.createServer(app)
const routing=require('./routes/index.js')


app.use(express.json())
app.use(bodyParser.text({type:'text/plain'}))
// app.use(cookieParser())
app.use(cors('*'));

// app.use(helmet())
// app.use(morgon('dev'))
app.use(rateLimit({
windowMs:15*60*1000,
max:100
}))

app.use('/health', (req, res) => {
    res.status(200).send({
      version: package.version,
      status: 'UP',
      msg: 'The API is up and running!',
    });
  });
  app.use('/api',routing);
  connectDb()
  .then(()=>{
    server.listen(port,()=>{console.log(`server is running at ${port}`)})

  })
  .catch((err)=>{
    console.log(`Error in Db connection ${err.message}`)
  })


