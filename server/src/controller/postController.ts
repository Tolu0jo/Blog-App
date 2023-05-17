import { Response, Request } from "express";
import Posts from "../model/postModel";

export const createPost = (req: Request, res: Response) => {
  try {
  } catch (error) {

  }
};
export const getPost = async (req: Request, res: Response) => {
  try {
    const post = req.query.cat
    if(post){
     const posts = await Posts.findAll({
            where: {cat :post},
          })
  return res.status(200).json({posts})
    }
      const posts =  await Posts.findAll({
          })
          return res.status(200).json({posts})
    
  } catch (error) {
  console.log(error)
  res.status(500).json({message:"Internal Server Error"})
  }
};
export const getSinglePost = (req: Request, res: Response) => {
  try {
  } catch (error) {

  }
};
export const deletePost = (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
export const updatePost = (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
