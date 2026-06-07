import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';

export const auth = (req,res,next)=>{
  const token = req.headers.authorization;
  if(!token){
     return res.status(401).json({message:"unauthorized"});
  }
  const payload=jwt.verify(token,JWT_SECRET);
  req.user=payload;
  next();
}