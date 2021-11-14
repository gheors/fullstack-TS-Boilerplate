import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
    console.log(req.authInfo)

    passport.authenticate('jwt', function (err, user, info) {
        if (err) {
            console.log(err)
            return res.status(401).json({ status: 'error', code: 'unauthorized' })
        }
        if (!user) {
            return res.status(401).json({ status: 'error', code: 'unauthorized' })
        } else {
            return next()
        }
    })(req, res, next)
}

export function authorizeJWT(req: Request, res: Response, next: NextFunction) {
    passport.authenticate('jwt', function (err, user, jwtToken) {
        if (err) {
            console.log(err)
            return res.status(401).json({ status: 'error', code: 'unauthorized' })
        }
        if (!user) {
            return res.status(401).json({ status: 'error', code: 'unauthorized' })
        } else {
            const scope = req.baseUrl.split('/').slice(-1)[0]
            const authScope = jwtToken.scope
            if (authScope && authScope.indexOf(scope) > -1) {
                return next()
            } else {
                return res.status(401).json({ status: 'error', code: 'unauthorized' })
            }
        }
    })(req, res, next)
}