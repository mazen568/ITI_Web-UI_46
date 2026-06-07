import express from "express"
import { register,login } from "../controller/userAuth.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
// router.get('/profile',auth,profile);

export default router;