import bcrypt from 'bcrypt'
import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import passport from 'passport'
import { IUser, User } from '../model/user'
import { JWT_SECRET } from '../util/secrets'

export async function registerUser(req: Request, res: Response) {
    let savedUser = {}
    new Promise((resolve, reject) => {
        const user = new User({
            username: req.body.username,
            password: req.body.password,
        })
        user.save().then(resolve).catch(reject)
        savedUser = user
    })

    const token = jwt.sign({ username: req.body.username }, JWT_SECRET)
    return { token, savedUser }
}

export function authenticateUser(req: Request, res: Response, next: NextFunction) {

    passport.authenticate('local', function (err, user, info) {
        // no async/await because passport works only with callback ..
        if (err) return next(err)
        if (!user) {
            return res.status(401).json({ status: 'error', code: 'unauthorized' })
        } else {
            const token = jwt.sign({ username: user.username }, JWT_SECRET)
            res.status(200).send({ token: token, user: user })
        }
    })(req, res, next)
}


export async function getUser(name: string): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
        User.findOne({ name: name }, (err: Error, user: IUser) => {
            if (err) {
                reject(err)
            } else {
                resolve(user)
            }
        })
    })
}
