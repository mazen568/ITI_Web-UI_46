import express from 'express';
import {createCourse} from '../controller/courseController.js';
const router = express.Router();



router.post('/',createCourse);

export default router;