import { connectDB } from './config/db.js';
import { PORT } from './config/config.js';
import express from 'express';
import authRoute from './routes/auth.js'

const app = express();
app.use(express.json());



connectDB();

app.use('/user',authRoute);


app.use((err,req,res,next)=>{
    res.status(err.status||500).json({success:false,message:err.message});
  })

app.listen(PORT,()=>{
console.log('Server is running on port 3000');
});