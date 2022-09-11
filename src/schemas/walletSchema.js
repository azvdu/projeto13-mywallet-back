import Joi from "joi";

export const newGain = Joi.object({
    value: Joi.number().required(),
    description: Joi.string().required()
})

export const newExit = Joi.object({
    value: Joi.number().required(),
    description: Joi.string().required()
})

export default {newGain, newExit}