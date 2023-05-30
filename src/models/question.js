import mongoose from 'mongoose';
const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        trim: true,
    },
    desc: {
        type: String,
        required: [true, "Please provide description"],
        trim: true,
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isFavorite: {
        type: Boolean,
        default: false
    },
    questionType: String,
    images: [{ type: String, required: true }],
    hints: [{ type: String }],
    difficulty: { type: String, required: true },
    languages: [{ type: String, required: true }],
    answerUrl: { type: String, required: true },
    companies: [{ type: String, required: true }],
    duration: { type: Number, required: true },
    videoLink: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {
    timestamps: true
})

const Question = mongoose.model('Question', questionSchema)
export { Question }
