import db from "../config/db.js";

export async function home(req, res){
    const token = req.headers["token"]

    try {
        const validToken = await db.collection('sessions').findOne({
            token: token
        })

        if (!validToken) {
            return res.sendStatus(401)
        }

        const wallet = await db.collection('wallet').find({
            userId: validToken.userId
        }).toArray()

        return res.status(200).send(wallet)
    } catch (error) {
        console.log(error);
        return res.sendStatus(500)
    }
}