import express from 'express';
import PlateNumberController from '../controllers/plateNumber.controller';

const router = express.Router();

router.post('/', PlateNumberController.create);
router.get('/', PlateNumberController.getPlateNumbers);

export default router;
