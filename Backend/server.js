const express = require("express")
require ("dotenv").config()
const app = express()
const connectDB=require("./mongodb")

connectDB()
const cors=require("cors")
app.use(express.json())
app.use(cors())
const router = require("./Route")
app.use(router)
app.get("/ping",((req,res)=>{
    res.send("pong")
}
))
const PORT=process.env.PORT || 3000
app.get("/",((req,res)=>{
    res.send("Your request is working")
    
}))
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
}) 

