import express, { Request, Response } from 'express';
import passport from 'passport';
import resolveConfig from './config/addons';


const app = express();

function isLoggedIn(req: Request, res: Response, next: any) {
	req?.user ? next() : res.sendStatus(401);
}

function isNotLoggedIn(req: Request, res: Response, next: any) {
	!req?.user ? next() : res.redirect('/auth/google');
}

resolveConfig(app);

app.get('/', (req, res) => {
	res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: `${process.env.LOGGED_DOMAIN}/`,
		failureRedirect: '/auth/google/failure',
	})
);

app.get('/auth/info', isLoggedIn, (req: Request, res: Response) => {
	const user = req.user as any;
	res.status(200).json({
		provider: user.provider,
		id: user.id,
		name: user.given_name,
		fullName: user.displayName,
		email: user.email,
		photo: user.picture,
	});
});

app.get('/auth/google/failure', isNotLoggedIn, (req, res) => {
	res.status(400).json({ message: 'Failed to authenticate' });
});

app.get('/auth/logout', (req, res: Response) => {
	req.logout({}, err => console.log(err));
	req.session.destroy(err => {
        res.clearCookie('connect.sid');
        console.log(err);
        res.status(200).send({ message: 'You are now logged out!' });
    });
});

app.listen(5000, () => console.log('Listening on port 5000'));
