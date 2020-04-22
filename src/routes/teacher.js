import { Router } from 'express';
const router = Router();
import { createdTeacher, getTeacher, getOneTeacher, deleteTeacher, updateTeacher } from '../controllers/teacherController'

router.post('/', createdTeacher);
router.get('/', getTeacher);
router.get('/:id', getOneTeacher);
router.delete('/:id', deleteTeacher);
router.put('/:id', updateTeacher);

export default router;