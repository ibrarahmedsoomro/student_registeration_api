const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/student_registration_api", {
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then( ()=> console.log("Connection is OK"))
.catch( (err)=>console.log("Connection is not OK"))