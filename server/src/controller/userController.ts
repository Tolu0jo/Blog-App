import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import Users from "../model/userModel";
import { RegisterUserSchema, options, userLoginSchema } from "../utils/utility";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import bcrypt from "bcryptjs";

const jwtsecret = process.env.JWT_SECRET as string;

//==================SIGNUP===================//

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, password, img, confirmPassword } = req.body;
    const userId = uuidv4();
    console.log(username);
    const validationResult = RegisterUserSchema.validate(req.body, options);
    if (validationResult.error) {
      return res
        .status(400)
        .json({ Error: validationResult.error.details[0].message });
    }
    const salt = await bcrypt.genSalt(10);
    const encrytedPassword = await bcrypt.hash(password, salt);

    const user = (await Users.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
    })) as unknown as { [key: string]: string };
    
    if (!user) {
        const newUser = await Users.create({
          userId,
          email,
          username,
          password: encrytedPassword,
          img,
        });
        return res
          .status(201)
          .json({ message: "User successfully registered", newUser });
      
    } else 
     if (username === user.username) {
      return res.status(409).json({
        Error: "Username already exist, kindly choose another username",
      });
    } else {
      return res.status(409).json({
        Error: "Email already exist",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//=====================LOGIN============================//

export const signIn = async (req: Request, res: Response) => {
  try {
    const { identifier, password } = req.body;

    const validation = userLoginSchema.validate(req.body, options);
    if (validation.error) {
      return res
        .status(403)
        .json({ Error: validation.error.details[0].message });
    }

    const user = (await Users.findOne({
      where: {
        [Op.or]: [{ username: identifier }, { email: identifier }],
      },
    })) as unknown as { [key: string]: string };
    const{userId}=user
    if (!user) {
      return res.status(404).json({ Error: "User not found" });
    }

    const validUser = await bcrypt.compare(password, user.password);
    if (!validUser) {
      return res.status(401).send({ Error: "Invalid password" });
    }

    

    const token = jwt.sign({ userId }, jwtsecret, { expiresIn: "30d" });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      
    })
    return res.status(200)
      .json({user});
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//=======================SignOut======================//
export const logOut =(req:Request, res:Response)=>{
   try {
    res.clearCookie("token")
    return res.status(200).json({message:"User logged out"})
   } catch (error) {
    console.log(error)
    return res.status(500).json({
        message: "Internal Server Error",
      });
   } 
}