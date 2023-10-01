const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser=require("cookie-parser")
const bodyParser=require("body-parser")
const fileupload=require("express-fileupload")
const dotenv=require("dotenv")
const path=require("path");
// const cors=require("cors")

if(process.env.NODE_ENV){
   dotenv.config()
}

if(process.env.NODE_ENV!=="PRODUCTION")
{
   dotenv.config({path:"backend/config/config.env"})
}
 


app.use(express.json({
    limit: '50mb'
  }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileupload())


//Route imports
const product=require("./routes/productRoute")
const user=require("./routes/userRoute")
const order=require("./routes/orderRoute")
const payment=require("./routes/paymentRoute")

app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)
app.use("/api/v1",payment)

app.use(express.static(path.join(__dirname,"../frontend/build")))
app.get("*",(req,res)=>{
     res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})


// middleware for errors 
app.use(errorMiddleware);
// app.use(cors())

module.exports = app;


