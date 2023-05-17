import createError from 'http-errors';
import express, {Request,Response,NextFunction} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from "cors"

import postsRouter from './routes/posts';
import usersRouter from './routes/users';
import { db } from './config/db';

const app = express();

db.sync().then(()=>{
  console.log("Database connected Successfully...")
}).catch(err=>{
  console.log(err)
})

app.use(cors({
  origin: 'http://localhost:5173', 
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err:createError.HttpError, req:Request, res:Response, next:NextFunction)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
