import express from 'express'
import schoolRouter from './school/routes';
import teacherRouter from './teacher/routes';

const router = express.Router();
router.use('/school', schoolRouter)
router.use('/teacher', teacherRouter)

export default router;