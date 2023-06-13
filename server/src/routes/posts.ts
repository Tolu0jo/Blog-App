import express,{Response,Request,NextFunction}from 'express';
import { createPost, deletePost, getPost, getSinglePost, updatePost } from '../controller/postController';
import multer from "multer";
import { auth } from '../auth/auth';


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "./uploads/")
    },
filename:(req,file,cb)=>{  
    cb(null,Date.now()+file.originalname)
}
})

const upload = multer({storage: storage})
const router = express.Router();

/* GET home page. */
router.get('/', getPost);
router.get('/:id', getSinglePost);
router.post('/add', createPost);
router.delete('/delete/:id', deletePost);
router.put('/edit/:id', updatePost);
router.post("/upload",upload.single("img"),async(req:Request,res:Response) => {
try {
  return  res.status(200).json(req?.file?.filename)
} catch (error) {
    console.log(error);
    res.status(500).json({Error:"Internal Server Error"})
}
}); 


export default router
