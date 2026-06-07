import express from 'express';
import { createCategory,getAllCategories,getProductsByCategory } from '../controller/categoryController.js';
const router= express.Router();

router.post('/',createCategory);
router.get('/',getAllCategories);
router.get('/:id/products',getProductsByCategory);



export default router;