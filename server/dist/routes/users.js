"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
/* GET users listing. */
router.post('/signup', userController_1.signUp);
router.post('/login', userController_1.signIn);
router.post('/logout', userController_1.logOut);
router.get("/:userId", userController_1.getProfile);
exports.default = router;
