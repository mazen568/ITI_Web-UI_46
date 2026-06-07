import express from 'express';
import mongoose from 'mongoose';
import studentRoute from "./routes/studentRoute.js";
import courseRoute from "./routes/courseRoute.js";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));


mongoose.connect('mongodb://localhost:27017/ui_db').then(()=>{
    console.log('Connected to database');
}).catch((err)=>{
    console.log('Database connection error:', err);   
});



app.use('/student',studentRoute);
app.use('/course',courseRoute);


app.set('view engine','ejs');
app.set('views','./views');


app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.status||500).json({success:false,message:err.message});
  })

app.listen(3000,()=>{
console.log('Server is running on port 3000');
});