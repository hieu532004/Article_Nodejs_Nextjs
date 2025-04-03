import { NextFunction, Request, Response } from 'express';
import { httpStatus, sendJsonSuccess } from '../helpers/response.helper';
import articlesService from '../services/article.service';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const articles = await articlesService.getAll(req.query);
        console.log('Articles from service:', articles);
        sendJsonSuccess(res, articles);
    } catch (error) {
        next(error);
    }
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const product = await articlesService.getById(id);
        sendJsonSuccess(res, product);
    } catch (error) {
        next(error);
    }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const product = await articlesService.create(payload);
        sendJsonSuccess(res, product, httpStatus.CREATED.statusCode, httpStatus.CREATED.message)
    } catch (error) {
        next(error);
    }
}
export default {
    getAll,
    getById,
    create,
};