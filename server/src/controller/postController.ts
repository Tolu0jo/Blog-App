import { Response, Request } from "express";
import Posts from "../model/postModel";
import Users from "../model/userModel";


export const createPost = async (req: Request| any, res: Response) => {
  try {
     
    const {title, desc,cat,date,userId,img} = req.body
   const post = await Posts.create({
    title,
    desc,
    img,
    cat,
    date,
    userId
   })
   res.status(201).json({message: "post created successfully", post})
  } catch (error) {
   console.log(error)
   res.status(500).json({message: "Internal Server Error"})

  }
};
export const getPost = async (req: Request, res: Response) => {
  try {
    const cat = req.query.cat
    if(cat){
     const post = await Posts.findAll({
            where: {cat},
          });
       
 
       
          return res.status(200).json({post})
    }

    const post =  await Posts.findAll({
     })
    
   
     return res.status(200).json({post})
   
    
  } catch (error) {
  console.log(error)
  res.status(500).json({message:"Internal Server Error"})
  }
};
export const getSinglePost = async(req: Request, res: Response) => {
  try {
    const{id}= req.params
    const post = await Posts.findOne({
        where: { id },
        attributes: ['id', 'title', 'desc', 'img', 'cat', 'date'],
        include: [
          {
            model: Users,
            attributes: ['username',  ["img", 'userImg']],
            as: 'User',
          },
        ],
      })as unknown as any;


      const postData= {
        id: post?.id,
        title: post?.title,
        desc: post?.desc,
        img: post?.img,
        cat: post?.cat,
        date: post?.date,
        username: post?.User.username,
        userImg: post?.User.userImg
      };

    return res.status(200).json(postData);
  } catch (error) {
console.log(error)
res.status(500).json({Error: "Internal Server Error"})
  }
};
export const deletePost =async (req: Request|any , res: Response) => {
  try {
  
    const{id}=req.params
   const deletedPost = await Posts.destroy({
        where: {
          id,
          //userId
        }
      })
  return res.status(200).json({message:"Post deleted successfully"})
  } catch (error) {
    return res.status(500).json({Error:"Internal Server Error"})
  }
};
export const updatePost = async (req: Request, res: Response) => {
  try {
    const{id}= req.params
    console.log(id,"identity update")
    const {title, desc,img,cat,date} = req.body
    const postToUpdate = await Posts.findOne({where:{id}})
    if(!postToUpdate) {
        res.status(404).json({Error:"No post to update"})
    }
   const updatedpost = await postToUpdate?.update({
    title,
    desc,
    img,
    cat,
    date,
   })
  return res.status(201).json({message: "post updated successfully", updatePost})
  } catch (error) {
   console.log(error)
return   res.status(500).json({message: "Internal Server Error"})

  }};
