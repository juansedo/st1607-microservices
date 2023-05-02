import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
	res.send({
		time: new Date(),
		requester: {
			origin: req.get('origin'),
			ip: req.socket.remoteAddress,
		},
		server: {
			host: req.get('host'),
			name: 'bicycle-map',
			server: 'express',
			latestApiVersion: 'v1',
		},
	});
});

export default router;
