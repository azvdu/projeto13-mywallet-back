import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import db from "./config/db.js";

export async function signUp(req, res){
    const user = req.body
    try {
        const SALT = Number(process.env.SALT)
        const passwordCrypt = bcrypt.hashSync(user.password, SALT)

        const checkConflict = await db.collection('users').findOne({
            email: user.email
        })
        if(checkConflict){
            return res.sendStatus(409)
        } 
        
        await db.collection('users').insertOne({
            name: user.name,
            email: user.email,
            password: passwordCrypt
        })

        return res.sendStatus(201)

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}


export async function signIn(req, res){
    const { email, password } = req.body
    try {
        const user = await db.collection('users').findOne({
            email
        })
        const passwordValid = bcrypt.compareSync(password, user.password)
        if(user && passwordValid){
            const token = uuid()
            await db.collection('sessions').insertOne({
                userId: user._id,
                token
            })
            return res.sendStatus(200)
        }else{
            return res.status(401).send("e-mail ou senha incorretos")
        }

    } catch (error) {
        console.log(error);
        return res.sendStatus(500)
    }
}
