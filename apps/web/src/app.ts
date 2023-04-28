import express from 'express';
import http from 'http';

import resolveConfig from './config/addons';
import resolveRoutes from './config/routes';

const app = express();
resolveConfig(app);
resolveRoutes(app);

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
	const addr = server.address();
	if (addr !== null && typeof addr !== 'string') {
		console.debug('SERVER START --> Listening on http://localhost:' + addr.port);
	}
});
