"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = exports.registerUser = void 0;
const bcrypt_nodejs_1 = __importDefault(require("bcrypt-nodejs"));
const user_1 = require("../model/user");
const passport_1 = __importDefault(require("passport"));
const secrets_1 = require("../util/secrets");
const jwt = __importStar(require("jsonwebtoken"));
async function registerUser(req, res) {
    const hashedPassword = bcrypt_nodejs_1.default.hashSync(req.body.password, bcrypt_nodejs_1.default.genSaltSync(10));
    console.log(req.body.username);
    await user_1.User.create({
        username: req.body.username,
        password: hashedPassword,
    });
    return jwt.sign({ username: req.body.username, scope: req.body.scope }, secrets_1.JWT_SECRET);
}
exports.registerUser = registerUser;
function authenticateUser(req, res, next) {
    passport_1.default.authenticate('local', function (err, user, info) {
        // no async/await because passport works only with callback ..
        if (err)
            return next(err);
        if (!user) {
            return res.status(401).json({ status: 'error', code: 'unauthorized' });
        }
        else {
            const token = jwt.sign({ username: user.username }, secrets_1.JWT_SECRET);
            res.status(200).send({ token: token });
        }
    });
}
exports.authenticateUser = authenticateUser;
