import express from 'express'
import { GET_teachersBySchool } from './controller';

const router = express.Router();

router.get('', GET_teachersBySchool)

export default router;