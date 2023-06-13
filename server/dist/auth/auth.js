"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtsecret = process.env.JWT_SECRET;
const auth = async (req, res, next) => {
    try {
        const auth = req.cookies.token;
        if (!auth) {
            res.status(401).json({ error: "Sign in as User" });
        }
        let verified = jsonwebtoken_1.default.verify(auth, jwtsecret);
        if (!verified) {
            res.status(401).json({ error: "you can access this route" });
        }
        const { userId } = verified;
        const user = await userModel_1.default.findOne({ where: { userId } });
        if (!user) {
            res.status(401).json({ error: "Register as a user" });
        }
        req.user = verified;
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ Error: "Internal Server Error" });
    }
};
exports.auth = auth;
