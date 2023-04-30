import "reflect-metadata";
import express from 'express';
import http from 'http';

import resolveConfig from './config/addons';
import resolveRoutes from './config/routes';
import { AppDataSource } from "./config/data-source";

const app = express();
resolveConfig(app);
resolveRoutes(app);

AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error))

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
	const addr = server.address();
	if (addr !== null && typeof addr !== 'string') {
		console.debug('SERVER START --> Listening on ' + addr.port);
	}
});
