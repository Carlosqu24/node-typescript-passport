import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';


import authRoutes from './routes/auth.routes'
import privateRoutes from './routes/private.routes'

// INITIALIZATIONS
const app = express();
import './database';


// SETTINGS
app.set('port', process.env.PORT || 5200);


// MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);


// ROUTES
app.use('/', authRoutes)
app.use('/private', privateRoutes)


export default app;