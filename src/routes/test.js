import { Router } from 'express';
const router = Router();
import { createdTest, getTest, getOneTest, deleteTest, updateTest } from '../controllers/testController'

router.post('/', createdTest);
router.get('/', getTest);
router.get('/:id', getOneTest);
router.delete('/:id', deleteTest);
router.put('/:id', updateTest);

export default router;