import express,{Response,Request,NextFunction}from 'express';
import { createPost, deletePost, getPost, getSinglePost, updatePost } from '../controller/postController';

const router = express.Router();

/* GET home page. */
router.get('/', getPost);
router.get('/:id',getSinglePost);
router.post('/',createPost);
router.delete('/:id',deletePost);
router.put('/:id', updatePost);

export default router
