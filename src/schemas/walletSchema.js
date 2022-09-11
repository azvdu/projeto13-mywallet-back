import Joi from "joi";

export const newTransaction = Joi.object({
    value: Joi.string().pattern(/^[0-9]+$/).required(),
    description: Joi.string().required(),
    type: Joi.string().valid('gain', 'exit').required()
})

export default {newTransaction}