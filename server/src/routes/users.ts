import express,{Response,Request,NextFunction}from 'express';
import { logOut, signIn, signUp } from '../controller/userController';
const router = express.Router();

/* GET users listing. */
router.post('/signup', signUp);
router.post('/login', signIn);
router.post('/logout', logOut);


export default router
