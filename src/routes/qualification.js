import { Router } from 'express';
const router = Router();
import { createdQualification } from '../controllers/qualificationController';

router.post('/', createdQualification);

export default router;