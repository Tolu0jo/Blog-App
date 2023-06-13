"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getSinglePost = exports.getPost = exports.createPost = void 0;
const postModel_1 = __importDefault(require("../model/postModel"));
const userModel_1 = __importDefault(require("../model/userModel"));
const createPost = (req, res) => {
    try {
        const { title, desc, cat, date, userId, img } = req.body;
        const post = postModel_1.default.create({
            title,
            desc,
            img,
            cat,
            date,
            userId
        });
        res.status(201).json({ message: "post created successfully", post });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.createPost = createPost;
const getPost = async (req, res) => {
    try {
        const cat = req.query.cat;
        if (cat) {
            const post = await postModel_1.default.findAll({
                where: { cat },
            });
            const posts = post.map((p) => p.dataValues);
            console.log(posts);
            return res.status(200).json({ posts });
        }
        const post = await postModel_1.default.findAll({});
        const posts = post.map((p) => p.dataValues);
        return res.status(200).json({ posts });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.getPost = getPost;
const getSinglePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postModel_1.default.findOne({
            where: { id },
            attributes: ['id', 'title', 'desc', 'img', 'cat', 'date'],
            include: [
                {
                    model: userModel_1.default,
                    attributes: ['username', ["img", 'userImg']],
                    as: 'User',
                },
            ],
        });
        const postData = {
            id: post?.dataValues.id,
            title: post?.dataValues.title,
            desc: post?.dataValues.desc,
            img: post?.dataValues.img,
            cat: post?.dataValues.cat,
            date: post?.dataValues.date,
            username: post?.User.dataValues.username,
            userImg: post?.User.dataValues.userImg
        };
        return res.status(200).json(postData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ Error: "Internal Server Error" });
    }
};
exports.getSinglePost = getSinglePost;
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await postModel_1.default.destroy({
            where: {
                id,
                //userId
            }
        });
        return res.status(200).json({ message: "Post deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ Error: "Internal Server Error" });
    }
};
exports.deletePost = deletePost;
const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id, "identity update");
        const { title, desc, img, cat, date } = req.body;
        const postToUpdate = await postModel_1.default.findOne({ where: { id } });
        if (!postToUpdate) {
            res.status(404).json({ Error: "No post to update" });
        }
        const updatedpost = await postToUpdate?.update({
            title,
            desc,
            img,
            cat,
            date,
        });
        return res.status(201).json({ message: "post updated successfully", updatePost: exports.updatePost });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.updatePost = updatePost;
