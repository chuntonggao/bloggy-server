import cookieParser from 'cookie-parser';
import cors from 'cors';
import { Express, NextFunction, Request, Response } from 'express';
import express from 'express';
import http from 'http';
import createError from 'http-errors';
import logger from 'morgan';
import path from 'path';

import db from './mongodb.config';
import setUpRoutes from './routes/index';
import { DEFAULT_PORT } from './util/constants';
import { normalizePort, stdout } from './util/util';

export default class App {
    private readonly port: number;
    private readonly app: Express = express();
    private server: http.Server;

    constructor(port?: number | string) {
        this.port = normalizePort(port || DEFAULT_PORT) as number;
    }

    start(): void {
        /*
        use logger
        */
        if (process.env.NODE_ENV !== 'test') {
            this.app.use(logger('dev'));
        }

        this.app.use('/reader', express.static('reader'));
        this.app.get('/reader/*', function (req, res) {
            res.sendFile('index.html', { root: 'reader' });
        });

        this.app.use('/publisher', express.static('publisher'));
        this.app.use('/', express.static('publisher'));
        this.app.use('/user/*', express.static('publisher'));
        this.app.get('/', function (req, res) {
            res.sendFile('index.html', { root: 'reader' });
        });
        this.app.get('/user/*', function (req, res) {
            res.sendFile('index.html', { root: 'reader' });
        });
        this.app.get('/account/*', function (req, res) {
            res.sendFile('index.html', { root: 'reader' });
        });
        this.app.get('/articles/*', function (req, res) {
            res.sendFile('index.html', { root: 'reader' });
        });
        this.app.get('/categories/*', function (req, res) {
            res.sendFile('index.html', { root: 'reader' });
        });

        /*
        configure cross origin
        */
        this.app.use(
            cors({
                credentials: true,
                origin: [
                    'http://localhost:8000',
                    'http://localhost:2000',
                    'https://bloggy-reader.netlify.app',
                    'https://bloggy-publisher.netlify.app',
                    'https://bloggy2020.herokuapp.com',
                ],
            })
        );

        /*
        configure express
        */
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, 'public')));

        /*
        configure cookie
        */
        this.app.use(cookieParser());

        /*
        print out request details if debug flag is enabled
        */
        this.app.use(stdout.printIncomingRequest);

        /*
        connect to db
        */
        db.connect();
        require('./models/article');
        require('./models/category');
        require('./models/comment');
        require('./models/user');

        /*
        configure routes
        */
        setUpRoutes(this.app);

        /*
        catch 404 and forward to error handler
        */
        this.app.use(function (req: Request, res: Response, next: NextFunction) {
            next(createError(404));
        });

        /*
        error handler
        */
        if (process.env.NODE_ENV === 'production') {
            this.app.use(express.static('publisher'));
        } else {
            this.app.use(function (
                err: Error & { status?: number },
                req: Request,
                res: Response,
                next: NextFunction
            ) {
                stdout.error('error caught in app.ts');
                stdout.log(err.toString());
                res.status(err.status || 500).send('Unexpected server error.');
            });
        }

        this.server = this.app.listen(this.port, () => {
            stdout.success(`App running on port ${this.port}...`);
        });
    }

    stop(): void {
        this.server.close(() => {
            stdout.info('Server will stop.');
        });
    }
}
