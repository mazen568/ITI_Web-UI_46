import express from 'express';
import {createStudent,getAllStudents} from '../controller/studentController.js';
import { get } from 'mongoose';

const router = express.Router();

router.post('/',createStudent);
router.get('/',getAllStudents);

export default router;