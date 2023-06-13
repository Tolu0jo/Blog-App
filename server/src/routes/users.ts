import express,{Response,Request,NextFunction}from 'express';
import { getProfile, logOut, signIn, signUp } from '../controller/userController';
const router = express.Router();

/* GET users listing. */
router.post('/signup', signUp);
router.post('/login', signIn);
router.post('/logout', logOut);
router.get("/:userId", getProfile)


export default router
