import joi from "joi";

export const registerSchema = joi.object({
  email: joi
    .string()
    .email({ tlds: false })
    .required()
    .messages({ "String.empty": "email is requires" }),

  userName: joi
    .string()
    .min(2)
    .required()
    .messages({ "String.empty": "email is requires" }),
  password: joi.string().min(8).required(),
});
