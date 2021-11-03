import mongoose from 'mongoose';

// typescript, extends mongoose.. because Video will have an ID that we wanna access
export interface IEvent extends mongoose.Document {
    name: string,
}
// mongo
const VideoSchema = new mongoose.Schema({
    name: String,
})

export const Event = mongoose.model<IEvent>("events", VideoSchema);