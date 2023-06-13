"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controller/postController");
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const router = express_1.default.Router();
/* GET home page. */
router.get('/', postController_1.getPost);
router.get('/:id', postController_1.getSinglePost);
router.post('/add', postController_1.createPost);
router.delete('/delete/:id', postController_1.deletePost);
router.put('/edit/:id', postController_1.updatePost);
router.post("/upload", upload.single("img"), async (req, res) => {
    try {
        return res.status(200).json(req?.file?.filename);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ Error: "Internal Server Error" });
    }
});
exports.default = router;
