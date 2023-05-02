import { Bicycle } from '@src/database/models/bicycle.entity';
import { Request, Response } from 'express';

class MapController {
	public static async index(req: Request, res: Response) {
		try {
			const data = await Bicycle.find();
			const serializedData = data.map(x => ({ id: x.id, location: [x.locationLat, x.locationLng] }))
			res.json({ message: 'Bicycles retrieved', data: serializedData });
		} catch (err) {
			console.log(err);
			res.status(400).json({ message: 'Bad request' });
		}
	}
}

export default MapController;
