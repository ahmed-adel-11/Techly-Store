import joi from "joi";

export const loginSchema = joi.object({
  email: joi
    .string()
    .email({ tlds: false })
    .required()
    .messages({ "String.empty": "email is requires" }),

  password: joi.string().min(8).required(),
});
