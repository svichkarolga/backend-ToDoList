import { Router } from 'express';
import taskRouter from './task.js';

const router = Router();

router.use('/task', taskRouter);

export default router;
