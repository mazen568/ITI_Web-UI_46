import Student from '../models/studentModel.js';

//crud
//create  post /student body: {name,email,status} url http://localhost:5000/student

export const createStudent = async(req,res)=>{
    try {
        const {name,email,status}=req.body;
        const student = new Student({
            name,email,status
        })
        await student.save();
        res.status(201).json({
            success:true,
            message:'student created successfully',
            data:student
        })
    } catch (error) {
        res.status(500).json({success:false,message:'server error',error:error.message})
    }
}


export const getAllStudents =async(req,res)=>{
    try {
        const students = await Student.find();
        res.status(200).json({
            success:true,
            message:'students retrieved successfully',
            data:students
        })
    } catch (error) {
        res.status(500).json({success:false,message:'server error',error:error.message})
    }
}

//patch /student/:id body: {name,email,status} url http://localhost:5000/student/123456789
export const updateStudent = async(req,res)=>{
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id,req.body,{new:true}); //new:true to return the updated document
        if(!student){
            return res.status(404).json({success:false,message:'student not found'})
        }
        res.status(200).json({
            success:true,
            message:'student updated successfully',
            data:student
        })

    } catch (error) {
        res.status(500).json({success:false,message:'server error',error:error.message})
    }
}


export const getAllStudentsForView= async(req,res)=>{
      const students=await Student.find();
      res.render("studentUI",{title:"all students",data:students});
}