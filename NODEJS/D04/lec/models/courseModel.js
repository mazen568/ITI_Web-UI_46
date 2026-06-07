import mongoose from 'mongoose';

const {Schema} = mongoose;

const courseSchema= new Schema({
  title:{
    type:String,
    required:true
  },
  students:[{
    type:Schema.Types.ObjectId,
    ref:'Student'
  }],
  instructor:{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
  }


},{timestamps:true});

const Course= mongoose.model('Course',courseSchema);
export default Course;