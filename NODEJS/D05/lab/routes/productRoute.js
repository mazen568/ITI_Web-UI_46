import express from 'express';
import { getAllProducts, createProduct, getProductById, updateProduct, replaceProduct, deleteProduct } from '../controller/productContoller.js'
import { auth } from '../middleware/authMiddleware.js';
import { authorize } from '../middleware/roleMiddleware.js';

const router = express.Router();

// user routes
router.get('/', auth,getAllProducts);
router.get('/:id', auth, getProductById);

// admin routes
router.post('/', auth,authorize('admin'), createProduct);
router.put('/:id', auth,authorize('admin'), replaceProduct);
router.patch('/:id', auth,authorize('admin'), updateProduct);
router.delete('/:id', auth,authorize('admin'), deleteProduct);

export default router;