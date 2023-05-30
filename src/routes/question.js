import express from 'express';
const router = express.Router()

import { isLoggedIn } from '../middlewares/isLoggedIn.js';
import { getQuestions } from '../controllers/question.js';

router.route('/').get(isLoggedIn, getQuestions)

export default router

