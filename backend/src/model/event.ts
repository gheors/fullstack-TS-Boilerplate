import mongoose from 'mongoose';

// typescript extends mongoose
export interface IEvent extends mongoose.Document {
    name: string,
}
// mongo
const EventSchema = new mongoose.Schema({
    name: String,
})

export const Event = mongoose.model<IEvent>("events", EventSchema);