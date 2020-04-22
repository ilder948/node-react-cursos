import { Router } from 'express';
const router = Router();
import { createdSubject, getSubject, getOneSubject, deleteSubject, updateSubject, addStudentToSubject } from '../controllers/subjectController'

router.post('/', createdSubject);
router.get('/', getSubject);
router.get('/:id', getOneSubject);
router.delete('/:id', deleteSubject);
router.put('/:id', updateSubject);


router.post('/addStudentToSubject',addStudentToSubject);

export default router;