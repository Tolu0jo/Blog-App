"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.getProfile = exports.signIn = exports.signUp = void 0;
const uuid_1 = require("uuid");
const userModel_1 = __importDefault(require("../model/userModel"));
const utility_1 = require("../utils/utility");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sequelize_1 = require("sequelize");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const postModel_1 = __importDefault(require("../model/postModel"));
const jwtsecret = process.env.JWT_SECRET;
//==================SIGNUP===================//
const signUp = async (req, res) => {
    try {
        const { username, email, password, img, confirmPassword } = req.body;
        const userId = (0, uuid_1.v4)();
        console.log(username);
        const validationResult = utility_1.RegisterUserSchema.validate(req.body, utility_1.options);
        if (validationResult.error) {
            return res
                .status(400)
                .json({ Error: validationResult.error.details[0].message });
        }
        const salt = await bcryptjs_1.default.genSalt(10);
        const encrytedPassword = await bcryptjs_1.default.hash(password, salt);
        const user = (await userModel_1.default.findOne({
            where: {
                [sequelize_1.Op.or]: [{ username }, { email }],
            },
        }));
        if (!user) {
            const newUser = await userModel_1.default.create({
                userId,
                email,
                username,
                password: encrytedPassword,
                img,
            });
            return res
                .status(201)
                .json({ message: "User successfully registered", newUser });
        }
        else if (username === user.username) {
            return res.status(409).json({
                Error: "Username already exist, kindly choose another username",
            });
        }
        else {
            return res.status(409).json({
                Error: "Email already exist",
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
exports.signUp = signUp;
//===========================LOGIN==============================//
const signIn = async (req, res) => {
    try {
        const { identifier, password } = req.body;
        const validation = utility_1.userLoginSchema.validate(req.body, utility_1.options);
        if (validation.error) {
            return res
                .status(403)
                .json({ Error: validation.error.details[0].message });
        }
        const user = (await userModel_1.default.findOne({
            where: {
                [sequelize_1.Op.or]: [{ username: identifier }, { email: identifier }],
            },
        }));
        if (!user) {
            return res.status(404).json({ Error: "Invalid credebtials" });
        }
        const { userId } = user;
        const validUser = await bcryptjs_1.default.compare(password, user.password);
        if (!validUser) {
            return res.status(401).send({ Error: "Invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ userId }, jwtsecret, { expiresIn: "30d" });
        res.cookie('token', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
        return res.status(200).json({ user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
exports.signIn = signIn;
//========================Get Profile =============================//
const getProfile = async (req, res) => {
    try {
        const userId = req.params;
        const profile = await userModel_1.default.findOne({
            where: { userId },
            include: [{
                    model: postModel_1.default,
                    as: "Post"
                }]
        });
        return res.status(200).json(profile);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.getProfile = getProfile;
//=======================SignOut======================//
const logOut = (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "User logged out" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
exports.logOut = logOut;
