import { AppDataSource } from '@src/config/data-source';
import { Bicycle } from '@src/database/models/bicycle.entity';
import { BicycleDTO } from '@src/database/models/bicycle.dto';
import { Request, Response } from 'express';


class BicycleController {
	public static async index(req: Request, res: Response) {
		try {
			const data = await Bicycle.find();
			res.json({ message: 'Bicycles retrieved', data });
		} catch (err) {
			console.log(err);
			res.status(400).json({ message: 'Bad request' });
		}
	}

	public static async show(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const element = await Bicycle.findOneByOrFail({ id });
			res.json({ message: 'Bicycle found', data: element });
		} catch (err) {
			res.status(404).json({ message: 'Bicycle not found' });
		}
	}

	public static async create(req: Request, res: Response) {
		try {
			const body: BicycleDTO = req.body;
			const bicycle = new Bicycle();
			bicycle.color = body.color;
			bicycle.model = body.model;
			bicycle.locationLat = body.location[0];
			bicycle.locationLng = body.location[1];

			await bicycle.save();
			res.status(201).json({ message: 'Bicycle created', data: bicycle });
		} catch (err) {
			console.log(err);
			res.status(400).json({ message: 'Bad request' });
		}
	}

	public static async update(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const body: BicycleDTO = req.body;
			const bicycleToUpdate = await Bicycle.findOneByOrFail({ id });
			if (body.color) bicycleToUpdate.color = body.color;
			if (body.model) bicycleToUpdate.model = body.model;
			if (body.location) {
				bicycleToUpdate.locationLat = body.location[0];
				bicycleToUpdate.locationLng = body.location[1];
			}

			await bicycleToUpdate.save();
			res.status(201).json({ message: 'Bicycle updated' });
		} catch (err) {
			console.log(err);
			res.status(400).json({ message: 'Bad request' });
		}
	}

	public static async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const bicycleToRemove = await Bicycle.findOneByOrFail({ id });

			await bicycleToRemove.remove();
			res.status(201).json({ message: 'Bicycle deleted' });
		} catch (err) {
			console.log(err);
			res.status(400).json({ message: 'Bad request' });
		}
	}
}

export default BicycleController;
