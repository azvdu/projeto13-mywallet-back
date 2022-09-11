import { newTransaction} from "../schemas/walletSchema.js";

export async function validationNewTransaction(req, res, next){
    const transaction = req.body
    try {
        const validation = await newTransaction.validate(transaction, {abortEarly: false})
        if(validation.error){
            return res.status(422).send(validation.error.details.map(detail => detail.message))
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(500)
    }
    next()
}
