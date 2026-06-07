import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';


const createToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: '1d' }
    );
};

const createError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
};

export const register = async (req, res, next) => {
        const { email, password, role } = req.body;
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw createError(400, 'User already exists');
        }

        await User.create({ email, password, role });

        const user = await User.findOne({ email });        
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user
        });

};

export const login = async (req, res, next) => {
        const {email,password} = req.body;

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            throw createError(404, 'user not found');
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw createError(401, 'Invalid email or password');
        }

        const token = createToken(user);

        const userResponse = await User.findOne({email});

        
        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user:userResponse
        });
};
