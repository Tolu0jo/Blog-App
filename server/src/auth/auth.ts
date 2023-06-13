import { Request, Response, NextFunction } from "express";
import Users from "../model/userModel";
import jwt from "jsonwebtoken"

const jwtsecret = process.env.JWT_SECRET as string;

export const auth = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const auth = req.cookies.token;

    if (!auth) {
      res.status(401).json({ error: "Sign in as User" });
    }

    let verified = jwt.verify(auth, jwtsecret);
    if (!verified) {
      res.status(401).json({ error: "you can access this route" });
    }
    const { userId } = verified as { [key: string]: string };

    const user = await Users.findOne({ where: { userId } });

    if (!user) {
      res.status(401).json({ error: "Register as a user" });
    }

    req.user = verified;

    next();
  } catch (error) {
    console.log(error)
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};