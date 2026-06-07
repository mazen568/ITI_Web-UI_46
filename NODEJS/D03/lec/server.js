import express from 'express';
import mongoose from 'mongoose';
import studentRoute from "./routes/studentRoute.js";
const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/ui_db').then(()=>{
    console.log('Connected to database');
}).catch((err)=>{
    console.log('Database connection error:', err);   
});



app.use('/student',studentRoute);


app.listen(3000,()=>{
console.log('Server is running on port 3000');

});