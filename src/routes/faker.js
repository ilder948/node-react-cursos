import { Router } from 'express';
const router = Router();
import { addTeacher, addCourse, addSubject, addCourseSubject, addStudent, addCourseSubjectStudent, addTest, addCourseSubjectStudentTest, qualification } from '../controllers/fakerController';

router.post('/addTeacher', addTeacher);
router.post('/addCourse', addCourse);
router.post('/addSubject', addSubject);
router.post('/addCourseSubject', addCourseSubject);
router.post('/addStudent', addStudent);
router.post('/addCourseSubjectStudent', addCourseSubjectStudent);
router.post('/addTest', addTest);
router.post('/addCourseSubjectStudentTest', addCourseSubjectStudentTest);
router.post('/qualification', qualification);

export default router;