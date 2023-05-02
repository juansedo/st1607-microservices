import express from 'express';
import MapController from '@src/controllers/map.controller';

const router = express.Router();

router.get('/', MapController.index);

export default router;