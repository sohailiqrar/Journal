const express = require("express");

const app = express()

app.get("/", (req, res) =>{
    res.send("Hello");
});

app.listen(4000, ()=>{
    console.log("app is running at 4000 port")
})
