import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import { dbConnection } from './database/schema';

dotenv.config();

const app = express();

const MongoStore = connectMongo(session);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const sessionStore = new MongoStore({
    mongooseConnection: dbConnection,
    collection: 'sessions'
});

app.use(session({
    name: 'TransId',
    resave: false,
    saveUninitialized: true,
    secret: 'defrff#@4%AH',
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: true
    }
}));

app.use('/', routes);

app.listen(process.env.PORT);
