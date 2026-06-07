import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";

export const createCategory= async(req,res)=>{
    const {name,description}= req.body;
    if(!name || !description){
        let error = new Error('Name and description are required');
        error.status=400;
        throw error;
    }
    const category = await Category.create({name,description});
    res.status(201).json({message:'Category created successfully',category});
}


export const getAllCategories = async (req, res) => {
    const categories = await Category.find();
    res.status(200).json({ success: true, categories });
  }; 
  
  
export const getProductsByCategory = async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id)
    if (!category) {
      let error = new Error('Category not found');
      error.status = 404;
      throw error;
    }
    const products = await Product.find({category: id}).populate('category');

    res.status(200).json({ success: true,category_name:category.name ,products });
}