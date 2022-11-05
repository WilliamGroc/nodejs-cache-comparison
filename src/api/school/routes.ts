import express from 'express'
import { getSchool } from './controller';

const router = express.Router();

router.get('', getSchool)

export default router;