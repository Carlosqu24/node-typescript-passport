import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

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


// ROUTES
app.get('')


export default app;