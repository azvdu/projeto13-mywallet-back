import { newGain } from "../controller/walletController.js";
import { newExit } from "../schemas/walletSchema.js";

export async function validationNewGain(req, res, next){
    const gain = req.body
    try {
        const validation = await newGain.validate(gain, {abortEarly: false})
        if(validation.error){
            return res.status(422).send(validation.error.details.map(detail => detail.message))
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(500)
    }
    next()
}

export async function validationNewExit(req, res, next){
    const exit = req.body
    try {
        const validation = await newExit.validate(exit, {abortEarly: false})
        if(validation.error){
            return res.status(422).send(validation.error.details.map(detail => detail.message))
        }
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
    next()
}