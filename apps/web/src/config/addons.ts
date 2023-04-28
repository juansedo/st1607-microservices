import express, { Express } from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

const resolveConfig = (app: Express) => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    return app;
}

export default resolveConfig;