import mongoose from "mongoose";

const {Schema} = mongoose;
const categorySchema = new Schema({
    name: {
        type: String,
        required:[true,'Category name is required'],
        unique:true,
        trim:true
    },
    description: {
        type: String,
        trim:true
    }
})

const Category = mongoose.model('Category',categorySchema);
export default Category;