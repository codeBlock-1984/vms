import express from 'express';
import plateNumberRouter from '../routers/plateNumber.router';

const router = express.Router();

router.use('/platenumbers', plateNumberRouter);

export default router;
