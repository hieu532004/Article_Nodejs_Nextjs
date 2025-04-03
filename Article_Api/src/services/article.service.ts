// articles.service.ts (dựa trên code trước đó của bạn)
import createError from 'http-errors';
import Article from '../models/article.model';

interface ArticlePayload {
    title: string;
    keyword: string;
    description: string;
    content: string;
    date: string;
}

const getAll = async (query: any) => {
    const { page = 1, limit = 10, sort_type = 'desc', sort_by = 'createdAt' } = query;

    let sortObject = {};
    sortObject = { ...sortObject, [sort_by]: sort_type === 'desc' ? -1 : 1 };

    let where = {};
    if (query.title && query.title.length > 0) {
        where = { ...where, title: { $regex: query.title, $options: 'i' } };
    }

    const articles = await Article
        .find(where)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ ...sortObject });

    const count = await Article.countDocuments(where);

    return {
        articles,
        pagination: {
            totalRecord: count,
            limit,
            page
        }
    };
};

const getById = async (id: string) => {
    const article = await Article.findById(id);
    if (!article) {
        throw createError(400, 'Article not found');
    }
    return article;
};

const create = async (payload: ArticlePayload) => {
    const articleExist = await Article.findOne({ title: payload.title });
    if (articleExist) {
        throw createError(400, 'Article already exists');
    }
    try {
        const article = new Article(payload);
        await article.save();
        return article;
    } catch (error) {
        throw createError(500, 'Error saving article');
    }
};

export default {
    getAll,
    getById,
    create,
};