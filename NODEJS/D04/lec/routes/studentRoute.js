import express from 'express';
import {createStudent,getAllStudents,getAllStudentsForView} from '../controller/studentController.js';
import { get } from 'mongoose';

const router = express.Router();

router.post('/',createStudent);
router.get('/',getAllStudents);
router.get('/view',getAllStudentsForView);

export default router;