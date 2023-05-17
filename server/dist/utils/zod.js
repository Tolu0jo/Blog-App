"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = (0, zod_1.object)({
    username: (0, zod_1.string)().min(3),
    email: (0, zod_1.string)().email(),
    password: (0, zod_1.string)().min(4),
    confirmPassword: (0, zod_1.string)(),
    img: (0, zod_1.string)()
})
    .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmpassword"]
});
