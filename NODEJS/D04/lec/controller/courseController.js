import Course from '../models/courseModel.js';

export const createCourse = async (req, res) => {
    const { title, students, instructor } = req.body;
  
    if (!title || !students || !instructor) {
      let error = new Error("Title, students, and instructor are required!");
      error.status = 400;
      throw error;
    }
  
    const course = await Course.create({ title, students, instructor });
    
    res.status(201).json({
      success: true,
      course
    });
  };

export const getAllStudentsByCourse=async(req,res)=>{
    const {courseId}=req.params;
    const course= await Course.findById(courseId).populate('students');
    if(!course){
        let error= new Error('Course not found');
        error.status=404;
        throw error;
    }
    res.status(200).json({success:true,students:course.students});
}