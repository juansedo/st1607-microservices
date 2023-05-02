import { Express } from 'express';
import IndexRouter from '@src/routes/main.routes';
import MapRouter from '@src/routes/map.routes';

const resolveRoutes = (app: Express) => {
    app.use('/', IndexRouter);
    app.use('/map', MapRouter);
}

export default resolveRoutes;