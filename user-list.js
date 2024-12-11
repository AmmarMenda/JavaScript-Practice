const bodyParser = require("body-parser");
const express = require("express");
const app=express();
const PORT=3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.get("/user-list",(req,res)=>{
     res.sendFile(__dirname + "/views/index.html");
       app.use(express.static(__dirname + "/views"));
});
app.post("/list",
    function (req, res) {
    const num1=Number(req.body.num1);
    const num2=Number(req.body.num2);
    let result = num1+num2;
    res.send("Addition - " + result);
    });
app.listen(PORT,()=>{
  console.log("SERVER IS RUNNING ON LOCALHOST");
})
