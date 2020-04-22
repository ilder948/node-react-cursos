import { Router } from 'express';
const router = Router();
import { createdStudent, getStudent, getOneStudent, deleteStudent, updateStudent } from '../controllers/studentController'

router.post('/', createdStudent);
router.get('/', getStudent);
router.get('/:id', getOneStudent);
router.delete('/:id', deleteStudent);
router.put('/:id', updateStudent);

export default router;