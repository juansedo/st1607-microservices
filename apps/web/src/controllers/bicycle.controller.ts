import { Request, Response } from 'express';
import Bicicleta from '../database/models/bicicleta';

class BicycleController {
	public static index(req: Request, res: Response) {
		res.send({ data: [] });
	}

	public static show(req: Request, res: Response) {
		const { id } = req.params;
		res.send({ data: { id } });
	}

	public static create(req: Request, res: Response) {
		res.send('bicicletas/create');
	}

	public static delete(req: Request, res: Response) {
		res.send('bicicletas/delete');
	}
}

export default BicycleController;
