import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
        select:false
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, { timestamps: true });


userSchema.pre("save",async function(){
    if(!this.isModified('password'))
        return;
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
}) 

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
} 

const User = mongoose.model('User', userSchema);
export default User;
