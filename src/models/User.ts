import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.models.User || mongoose.model('User', userSchema)