const express = require('express');
const app = express();
const port = process.env.Port || 3000;
require('./db/conn');
const Student = require("./models/students")

app.use(express.json());

app.get("/", (req, res)=>{
  res.send("Hello Jhal Dubb")    
})

//app.post("/students",(req, res)=>{
//     console.log(req.body)
    
    
//      user.save().then( ()=>{
//          res.status(201).send(user)
//      }).catch( (err)=> {
//          res.status(400).send(err)
//      })
// })

app.post("/students",  async(req,res)=>{

    try {
        const user = new Student(req.body);
        const Createuser = await user.save()
        res.status(201).send(Createuser);
    }
    catch(err){
        res.status(404).send(err);
    }
  

})
app.listen(port, ()=>{
    console.log(`Server is Running http://localhost:${port}`)
})