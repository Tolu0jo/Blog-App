"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserSchema = exports.options = exports.userLoginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userLoginSchema = joi_1.default.object().keys({
    identifier: joi_1.default.string().required(),
    password: joi_1.default.string()
        .regex(/^[a-zA-Z0-9]{3,10}$/)
        .required(),
});
exports.options = {
    abortEarly: false,
    errors: {
        wrap: {
            label: "",
        },
    },
};
exports.RegisterUserSchema = joi_1.default.object().keys({
    email: joi_1.default.string().trim().lowercase().required(),
    username: joi_1.default.string().required(),
    password: joi_1.default.string()
        .regex(/^[a-zA-Z0-9]{3,20}$/)
        .required(),
    confirmPassword: joi_1.default.any()
        .equal(joi_1.default.ref("password"))
        .required()
        .label("Confirm password")
        .messages({ "any.only": "{{#label}} does not match" }),
    img: joi_1.default.string(),
});
