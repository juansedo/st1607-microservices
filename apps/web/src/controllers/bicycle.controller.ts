import { Request, Response } from 'express';
import { BicycleRepository, BicycleType } from '../database/models/bicycle.model';

class BicycleController {
	public static index(req: Request, res: Response) {
		const message = 'Bicycles retrieved';
		const data = BicycleRepository.getAll();
		res.json({ message, data });
	}

	public static show(req: Request, res: Response) {
		const { id } = req.params;
		const element = BicycleRepository.findOne(id);
		if (element) {
			const message = 'Bicycle found';
			res.json({ message, data: element });
		} else {
			const message = 'Bicycle not found';
			res.status(404).json({ message });
		}
	}

	public static create(req: Request, res: Response) {
		try {
			const body: BicycleType = req.body;
			BicycleRepository.createOne(body.color, body.model, body.location);
			res.status(201).json({ message: 'Bicycle created' });
		} catch (err) {
			console.log(err);
			res.status(400).json({ message: 'Bad request' });
		}
	}

	public static update(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const body: BicycleType = req.body;
			BicycleRepository.updateOne(id, { color: body.color, model: body.model, location: body.location });
			res.status(201).json({ message: 'Bicycle updated' });
		} catch (err) {
			console.log(err);
			res.status(400).json({ message: 'Bad request' });
		}
	}

	public static delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			BicycleRepository.deleteOne(id);
			res.status(201).json({ message: 'Bicycle deleted' });
		} catch (err) {
			console.log(err);
			res.status(400).json({ message: 'Bad request' });
		}
	}
}

export default BicycleController;
