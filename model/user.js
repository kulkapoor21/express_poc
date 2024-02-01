import { Schema, model } from "mongoose";
import Joi from "joi";

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const validateLoginUser = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().min(8).max(50).required().email(),
  password: Joi.string()
    .min(6)
    .required()
    .max(20)
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/), //special/number/capital
})

const userModel = model('userSchema', userSchema, 'userCollection')
export {userModel, validateLoginUser}
