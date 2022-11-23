import * as express from 'express'
import { GET_studentsBySchool, GET_studentsBySchoolFromDatabase } from './controller';

const router = express.Router();

router.get('', GET_studentsBySchool)
router.get('/database', GET_studentsBySchoolFromDatabase)

export default router;