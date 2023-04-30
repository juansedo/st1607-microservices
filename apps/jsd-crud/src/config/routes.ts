import { Express } from 'express';
import indexRouter from '@src/routes/main.routes';
import BicycleRouter from '@src/routes/bicycle.routes';

const resolveRoutes = (app: Express) => {
    app.use('/', indexRouter);
    app.use('/bicycles', BicycleRouter);
}

export default resolveRoutes;