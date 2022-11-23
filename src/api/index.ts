import * as express from 'express'
import schoolRouter from './school/routes';
import studentRouter from './student/routes';

const router = express.Router();
router.use('/school', schoolRouter)
router.use('/student', studentRouter)

export default router;