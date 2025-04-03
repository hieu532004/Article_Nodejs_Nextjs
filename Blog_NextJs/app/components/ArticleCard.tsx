import Link from 'next/link';

interface Article {
  _id: string;
  title: string;
  description: string;
  date: string;
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-2">{article.description}</p>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(article.date).toLocaleDateString()}
      </p>
      <Link
        href={`/article/${article._id}`}
        className="text-blue-600 hover:underline"
      >
        Read More
      </Link>
    </div>
  );
}