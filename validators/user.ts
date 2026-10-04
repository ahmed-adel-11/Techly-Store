import joi from "joi";

// Register User
const validateRegisterUser = (obj: any) => {
  const schema = joi.object({
    email: joi.string().trim().min(5).max(200).required().email(),
    userName: joi.string().trim().min(2).max(200).required(),
    password: joi.string().trim().min(6).required(),
    isAdmin: joi.boolean(),
  });

  return schema.validate(obj);
};

// Update User
const validateUpdaterUser = (obj: any) => {
  const schema = joi.object({
    email: joi.string().trim().min(5).max(200).email(),
    userName: joi.string().trim().min(2).max(200),
    password: joi.string().trim().min(6),
    isAdmin: joi.boolean(),
  });

  return schema.validate(obj);
};

// Login User
const validateLoginUser = (obj: any) => {
  const schema = joi.object({
    email: joi.string().trim().min(5).max(200).email(),
    password: joi.string().trim().min(6),
  });

  return schema.validate(obj);
};

export { validateLoginUser, validateRegisterUser, validateUpdaterUser };
