import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Page Not Found</h1>
                <p className="text-gray-600 mb-6">
                    Oops! The page you’re looking for doesn’t exist. Return to the homepage to explore articles.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
}