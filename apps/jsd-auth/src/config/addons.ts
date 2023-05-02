import express, { Express, Request } from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
require('dotenv').config();

const resolveConfig = (app: Express) => {
    app.use(session({ secret: 'bicycles', resave: true, saveUninitialized: true }));
	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(passport.initialize());
	app.use(passport.session());
	passport.serializeUser((user: any, done: any) => done(null, user));
	passport.deserializeUser((user: any, done: any) => done(null, user));

	passport.use(
		new GoogleStrategy(
			{
				clientID: `${process.env.GOOGLE_CLIENT_ID}`,
				clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
				callbackURL: `${process.env.DOMAIN}/google/callback`,
				passReqToCallback: true,
			},
			(request: Request, accessToken: string, refreshToken: string, profile: any, done: any) => {
				console.log(`user ${profile.id} is logging now!`);
				return done(null, profile);
			}
		)
	);

	return app;
};

export default resolveConfig;
