"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeJWT = exports.authenticateJWT = void 0;
const passport_1 = __importDefault(require("passport"));
function authenticateJWT(req, res, next) {
    passport_1.default.authenticate('jwt', function (err, user, info) {
        if (err) {
            console.log(err);
            return res.status(401).json({ status: 'error', code: 'unauthorized' });
        }
        if (!user) {
            return res.status(401).json({ status: 'error', code: 'unauthorized' });
        }
        else {
            return next();
        }
    })(req, res, next);
}
exports.authenticateJWT = authenticateJWT;
function authorizeJWT(req, res, next) {
    passport_1.default.authenticate('jwt', function (err, user, jwtToken) {
        if (err) {
            console.log(err);
            return res.status(401).json({ status: 'error', code: 'unauthorized' });
        }
        if (!user) {
            return res.status(401).json({ status: 'error', code: 'unauthorized' });
        }
        else {
            const scope = req.baseUrl.split('/').slice(-1)[0];
            const authScope = jwtToken.scope;
            if (authScope && authScope.indexOf(scope) > -1) {
                return next();
            }
            else {
                return res.status(401).json({ status: 'error', code: 'unauthorized' });
            }
        }
    })(req, res, next);
}
exports.authorizeJWT = authorizeJWT;
