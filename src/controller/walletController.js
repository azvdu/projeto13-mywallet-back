import dayjs from "dayjs";

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

export async function newTransaction(req, res){
    const transaction = req.body;
    const token = req.headers["token"]
    try {
        const validToken = await db.collection('sessions').findOne({
            token: token
        })
        if(!validToken){
            return res.sendStatus(401)
        }
        await db.collection('wallet').insertOne({
            userId: validToken.userId,
            value: transaction.value,
            description: transaction.description,
            type: transaction.type,
            date: dayjs().format('DD/MM')
        })

        return res.sendStatus(201)

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}