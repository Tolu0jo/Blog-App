"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getSinglePost = exports.getPost = exports.createPost = void 0;
const postModel_1 = __importDefault(require("../model/postModel"));
const createPost = (req, res) => {
    try {
    }
    catch (error) {
    }
};
exports.createPost = createPost;
const getPost = async (req, res) => {
    try {
        const post = req.query.cat;
        if (post) {
            const posts = await postModel_1.default.findAll({
                where: { cat: post },
            });
            return res.status(200).json({ posts });
        }
        const posts = await postModel_1.default.findAll({});
        return res.status(200).json({ posts });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.getPost = getPost;
const getSinglePost = (req, res) => {
    try {
    }
    catch (error) {
    }
};
exports.getSinglePost = getSinglePost;
const deletePost = (req, res) => {
    try {
    }
    catch (error) { }
};
exports.deletePost = deletePost;
const updatePost = (req, res) => {
    try {
    }
    catch (error) { }
};
exports.updatePost = updatePost;
