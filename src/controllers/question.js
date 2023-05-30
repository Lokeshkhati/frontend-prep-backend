import { Question } from '../models/question.js'
import { CustomError } from '../utils/customError.js'
const getQuestions = async (req, res, next) => {
    try {

        const questions = await Question.find({})
        if (!questions) {
            return next(new CustomError('questions not found', 400))
        }
        res.status(200).json({ success: true, questions })
    } catch (error) {
        return next(new CustomError(error, 500))
    }
}

export { getQuestions }