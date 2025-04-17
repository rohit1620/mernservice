const express = require("express");
const app = express();
const router = require("./Router/auth-router");


app.use("/api/auth",router)

// app.get("/",(req,res)=>{
//     res.status(200).send("This is home page");

// })

// app.get("/register",(req,res)=>{
//     res.status(200).send("This is register page");
// })

const PORT=3000
app.listen(PORT,()=>{
    console.log("server running on",PORT);
    
})
