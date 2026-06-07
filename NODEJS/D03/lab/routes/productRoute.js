import express from 'express';
import { getAllProducts, createProduct, getProductById, updateProduct, replaceProduct,deleteProduct } from '../controller/productContoller.js'

const router= express.Router();

router.post('/',createProduct);
router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.put('/:id',replaceProduct);
router.patch('/:id',updateProduct);
router.delete('/:id',deleteProduct);


export default router;