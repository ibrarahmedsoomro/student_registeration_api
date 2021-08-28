const mongoose = require('mongoose')
 const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLenght : 3
    },

    email : {
        type : String,
        required : true,
        unique : [false , "Email is Already Presented"],
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new error("Invalid Email")
            }
        }

    },

    phone:{
        type : Number,
        min : 11,
        unique : true
    },

    address : {
        type : String,
    }
})


const Student = new mongoose.model("Student", studentSchema)

module.exports = Student;

