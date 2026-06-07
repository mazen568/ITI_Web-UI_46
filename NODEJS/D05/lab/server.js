import express from 'express';
import productRoute from './routes/productRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import authRoute from './routes/authRoute.js';
import { connectDB } from './config/db.js';
import { PORT } from './config/config.js';

const app = express();
app.use(express.json());


app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/categories', categoryRoute);

connectDB();




app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.status||500).json({success:false,message:err.message});
  })


app.listen(PORT,() => {
    console.log('server is running on port 3000');
});