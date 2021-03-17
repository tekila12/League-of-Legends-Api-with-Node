const express = require("express");
const importData = require("./data.json")
const app= express();
const cors=require('cors');
let port = process.env.PORT || 3000;
app.use(cors());
app.get("/", (req,res)=>{
    res.send("Hello11")
})

app.get("/champion",(req, res)=>{
    res.send(importData)
})

app.listen(port,()=>{
    console.log(`example app is listening on port http://localhost:${port}`)
})