import express from 'express';
import mongoose from 'mongoose';
import productRoute from './routes/productRoute.js';
import categoryRoute from './routes/categoryRoute.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ui_db').then(()=>{
    console.log('Connected to database');
}).catch((err)=>{
    console.log('Database connection error:', err);   
});



app.use('/products',productRoute);
app.use('/categories',categoryRoute);




app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.status||500).json({success:false,message:err.message});
  })


app.listen(3000, () => {
    console.log('server is running on port 3000');
});