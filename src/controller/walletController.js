import db from "../config/db.js";

export async function wallet(req, res){
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

export async function newGain(req, res){
    const gain = req.body;
    try {
        await db.collection('gains').insertOne({
            value: gain.value,
            description: gain.description
        })
        return res.sendStatus(201)

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function newExit(req, res){
    const exit = req.body;
    try {
        await db.collection('exits').insertOne({
            value: exit.value,
            description: exit.description
        })
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}