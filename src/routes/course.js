import { Router } from 'express';
const router = Router();
import { createdCourse, getCourse, getOneCourse, deleteCourse, updateCourse, addSubjectToCourse } from '../controllers/courseController'

router.post('/', createdCourse);
router.get('/', getCourse);
router.get('/:id', getOneCourse);
router.delete('/:id', deleteCourse);
router.put('/:id', updateCourse);


router.post('/addSubjectToCourse',addSubjectToCourse);

export default router;