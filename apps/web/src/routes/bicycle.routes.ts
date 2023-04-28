import express from 'express';
import BicycleController from '../controllers/bicycle.controller';

const router = express.Router();

router.get('/', BicycleController.index);
// router.get("/:id/show", bicicletaController.show);
// router.get("/create", bicicletaController.create_get);
// router.post("/create", bicicletaController.create_post);
// router.get("/:id/update", bicicletaController.update_get);
// router.post("/:id/update", bicicletaController.update_post);
// router.post("/:id/delete", bicicletaController.delete);

export default router;