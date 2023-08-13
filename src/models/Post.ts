import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	imgURL: String,
    tags: {
        type: [String]
    },
    username: {
        type: String,
        required: true
    }
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);
