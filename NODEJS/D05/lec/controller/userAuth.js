import User from "../models/userModel.js";
import jwt from "jsonwebtoken"



const getToken=(user)=>{
   return jwt.sign({
        id:user.email,
        email:user.email,
        role:user.role
    },process.env.JWT_SECRET,{expiresIn:"1h"}
)
}

const createError=(status,message)=>{
   const error = new Error(message);
   error.status=status;
   return error;
}

export const register = async(req,res)=>{
    const {email,password}=req.body;
    const exists=await User.findOne({email})
    if(exists)
        throw createError(409,"the user already exists");

    const user =await User.create({email,password});
    res.status(201).json({user,success:true,message:"register successful"});
}

export const login = async(req,res)=>{
    const {email,password}=req.body;
    const user = await User.findOne({email});
    if(!user)
        throw createError(401,'user not found');

    const isMatch = await user.comparePassword(password);
    if(!isMatch)
        throw createError(401,'invalid email or password');
     
    const token = getToken(user);
    res.status(200).json({user,token,success:true,message:"login successful"})
}