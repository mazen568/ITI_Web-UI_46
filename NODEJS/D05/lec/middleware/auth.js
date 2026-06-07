export const auth = (req,res,next)=>{
  const token = req.headers.Authorization;
  if(!token){
     return res.status(401).json({message:"unauthorized"});
  }
  const payload=jwt.verify(token,process.env.JWT_SECRET);

  req.user=payload;
  next();
}