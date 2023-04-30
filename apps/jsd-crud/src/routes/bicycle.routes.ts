import express from 'express';
import BicycleController from '@src/controllers/bicycle.controller';

const router = express.Router();

router.get('/', BicycleController.index);
router.post('/', BicycleController.create);
router.get('/:id', BicycleController.show);
router.put('/:id', BicycleController.update);
router.delete('/:id', BicycleController.delete);

export default router;