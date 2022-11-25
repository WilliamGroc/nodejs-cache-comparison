import * as express from 'express'
import { deleteSchool, getSchool, saveSchool, updateSchool } from './controller';

const router = express.Router();

router.get('', getSchool)
  .post('', saveSchool)
  .delete('', deleteSchool)
  .put('', updateSchool)

export default router;