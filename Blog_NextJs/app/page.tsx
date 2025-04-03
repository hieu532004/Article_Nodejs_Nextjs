import { getAllArticles } from './lib/api';
import ArticleCard from './components/ArticleCard';

interface Article {
  _id: string;
  title: string;
  description: string;
  date: string;
}

export default async function Home() {
  const response = await getAllArticles();
  console.log('Raw API data:', response); // Giữ log để debug
  const articles: Article[] = response.data?.articles || []; // Truy cập data.articles

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Articles</h1>
      {articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}