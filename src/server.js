import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { json } from 'body-parser'

const session = require('express-session')
const FileStore = require('session-file-store')(session)

require('dotenv').config()

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		json(),
		session({
			secret: process.env.SESSION_SECRET,
			resave: true,
			saveUninitialized: true,
			cookie: {
				maxAge: 28800000
			},
			store: new FileStore({
				path: `.sessions`
			})
		}),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => {
				return ({
					accessToken: req.session.accessToken,
					refreshToken: req.session.refreshToken
				})
			}
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
