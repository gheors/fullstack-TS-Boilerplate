import mongoose, { Document, Schema, Model, model, Error } from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser extends Document {
    username: string
    password: string
    comparePassword: (candidatePassword: string, callback: (err: any, isMatch: boolean) => void) => void
}

export const userSchema: Schema<IUser> = new Schema({
    username: String,
    password: String,
})

userSchema.pre<IUser>('save', async function save(next) {
    const hash = bcrypt.hashSync(this.password, 10)
    const res = await bcrypt.compare(this.password, hash)
    console.log("registration : " + res)
    this.password = hash
    console.log(this.password)
    next()
})

userSchema.methods.comparePassword = async function (candidatePassword: string, callback: any) {
    const result = await bcrypt.compare(candidatePassword, this.password);
    callback(undefined, result)
}


export const User: Model<IUser> = model<IUser>('User', userSchema)
