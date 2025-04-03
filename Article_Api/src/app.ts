import express, { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import path from 'path';

import articlesRouter from './routes/v1/acticle.route';
/** -------|| INITIAL APP || --------- */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(compression());

app.use(express.static(path.join(__dirname, '../public')));

/** -------|| BEGIN REGISTER ROUTES || --------- */
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});
//Đăng ký một route từ file bên ngoài
app.use('/api/v1', articlesRouter);
/** -------|| END REGISTER ROUTES || --------- */


/** -------|| BEGIN HANDLE ERRORS || --------- */
// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404));
});

// error handler, catch 5xx errors
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    console.log(err.stack);
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        statusCode: statusCode,
        message: err.message,
        data: null
    });
});
/** -------|| END HANDLE ERRORS || --------- */
export default app;