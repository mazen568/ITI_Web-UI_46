//schema is a class , we create an instance from it and we can use that instance to create a collection in the database
import mongoose from 'mongoose';

const {Schema}=mongoose;
const studentSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:[3,'Name must be at least 3 characters long'],
        maxlength:[50,'Name must be less than 50 characters long'],
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        match:[/^[A-Za-z0-9]{3,15}@(gmail|yahoo|hotmail)\.com$/,"email must be a valid email address"]
    },
    status:{
        type:String,
        enum:['student','graduate'],
        default:'student'
    }
})


const studentModel = mongoose.model('student',studentSchema);
export default studentModel;