import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
    try {
        const { name, price, category, description } = req.body;

        if (!name || !price || !category) {
            return res.status(400).json({ message: 'Name, price, and category are required' });
        }

        const product = new Product({
            name,
            price,
            category,     
            description   
        });

        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
}

export const getAllProducts= async(req,res)=>{
    try {
        const products= await Product.find();
        res.status(200).json({message:'Products fetched successfully',products});
    } catch (error) {
        res.status(500).json({message:'Error fetching products',error:error.message});
    }   
}


export const getProductById= async(req,res)=>{
    try {
        const {id}= req.params;
        const product= await Product.findById(id);
        if(!product){
            return res.status(404).json({message:'Product not found'});
        }
        res.status(200).json({message:'Product fetched successfully',product});
    } catch (error) {
        res.status(500).json({message:'Error fetching product',error:error.message});
    }
}

//patch
export const updateProduct= async(req,res)=>{
    try {
        const {id}= req.params;
        const {name,price}= req.body;
        const product= await Product.findByIdAndUpdate(id,{name,price},{new:true});
        if(!product){
            return res.status(404).json({message:'Product not found'});
        }
        res.status(200).json({message:'Product updated successfully',product});
    } catch (error) {
        res.status(500).json({message:'Error updating product',error:error.message});
    }
}

//put
export const replaceProduct= async(req,res)=>{
    try {
        const{id}=req.params;
        const {name,price}= req.body;
        if(!name || !price){
            return res.status(400).json({message:'Name and price are required'});
        }
        const product= await Product.findByIdAndUpdate(id,{name,price},{new:true});

        if(!product){
            return res.status(404).json({message:'Product not found'});
        }
        res.status(200).json({message:'Product replaced successfully',product});
    } catch (error) {
        res.status(500).json({message:'Error replacing product',error:error.message});
    }
}



export const deleteProduct= async(req,res)=>{
     try {
        const {id}= req.params;
        const product= await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:'Product not found'});
        }
        res.status(200).json({message:'Product deleted successfully',product});
     } catch (error) {
        res.status(500).json({message:'Error deleting product',error:error.message});
     }
}