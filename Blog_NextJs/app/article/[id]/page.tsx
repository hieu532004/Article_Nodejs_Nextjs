import { getArticleById } from '../../lib/api';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

interface Article {
    _id: string;
    title: string;
    keyword: string;
    description: string;
    content: string;
    date: string;
}

export default async function ArticleDetail({
    params,
}: {
    params: { id: string };
}) {
    let article: Article | null = null;

    try {
        const response = await getArticleById(params.id);
        article = response.data; // Truy cập phần data từ response
    } catch (error) {
        console.error('Failed to fetch article:', error);
    }

    if (!article) {
        return (
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
                <Link href="/" className="text-blue-600 hover:underline">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="prose max-w-3xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-500 mb-2">
                {new Date(article.date).toLocaleDateString()}
            </p>
            <p className="text-gray-600 mb-4 italic">{article.description}</p>
            <div className="text-gray-500 mb-4">Keywords: {article.keyword}</div>
            <div className="mb-8">
                <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
            <Link href="/" className="text-blue-600 hover:underline">
                Back to Home
            </Link>
        </div>
    );
}