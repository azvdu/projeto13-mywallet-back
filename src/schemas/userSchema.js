import Joi from "joi";


export const signUp = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    passwordConfirmation: Joi.ref("password")
})

export const signIn = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export default {signUp, signIn}