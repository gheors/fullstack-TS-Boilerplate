import bcrypt from 'bcrypt'
import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import passport from 'passport'
import { User } from '../model/user'
import { JWT_SECRET } from '../util/secrets'

export async function registerUser(req: Request, res: Response): Promise<string> {
    const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    new Promise((resolve, reject) => {
        const user = new User({
            username: req.body.username,
            password: hashedPassword,
        })
        console.log(hashedPassword)
        user.save().then(resolve).catch(reject)
    })

    const token = jwt.sign({ username: req.body.username }, JWT_SECRET)
    return token
}

export function authenticateUser(req: Request, res: Response, next: NextFunction) {

    passport.authenticate('local', function (err, user, info) {
        // no async/await because passport works only with callback ..
        if (err) return next(err)
        if (!user) {
            return res.status(401).json({ status: 'error', code: 'unauthorized' })
        } else {
            const token = jwt.sign({ username: user.username }, JWT_SECRET)
            res.status(200).send({ token: token })
        }
    })(req, res, next)
}