import * as express from 'express'
import { deleteSchool, getSchool, saveSchool } from './controller';

const router = express.Router();

router.get('', getSchool)
  .post('', saveSchool)
  .delete('', deleteSchool)

export default router;