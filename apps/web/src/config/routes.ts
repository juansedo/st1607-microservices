import { Express } from 'express';
import indexRouter from '../routes/index';
import bicycleRouter from '../routes/bicicleta';

const resolveRoutes = (app: Express) => {
    app.use('/', indexRouter);
    app.use('/bicicletas', bicycleRouter);
}

export default resolveRoutes;