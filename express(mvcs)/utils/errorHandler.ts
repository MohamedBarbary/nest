import { Request, Response, NextFunction } from "express";
import AppError from "./appError"; // Assuming you store AppError in utils

const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack:process.env.NODE_ENV === "development"?err.stack:"",
    });
};

export default errorHandler;