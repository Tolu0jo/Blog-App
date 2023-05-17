import Joi from "joi";

export const userLoginSchema = Joi.object().keys({
  identifier: Joi.string().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,10}$/)
    .required(),
});

export const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};

export const RegisterUserSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().required(),
  username: Joi.string().required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,20}$/)
    .required(),
  confirmPassword: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirm password")
    .messages({ "any.only": "{{#label}} does not match" }),
  img: Joi.string(),
});

