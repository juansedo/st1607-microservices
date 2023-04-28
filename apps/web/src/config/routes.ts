import { Express } from 'express';
import indexRouter from '../routes/main.routes';
import BicycleRouter from '../routes/bicycle.routes';

const resolveRoutes = (app: Express) => {
    app.use('/', indexRouter);
    app.use('/bicycles', BicycleRouter);
}

export default resolveRoutes;