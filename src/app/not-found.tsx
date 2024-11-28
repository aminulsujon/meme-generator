"use client"
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-md">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-4xl font-bold text-blue-600 mb-8">Free Meme Generator</h2>
        <h2 className="text-2xl text-gray-700 mb-4">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
          <Link href="/" className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-200">
            Go to Homepage
          </Link>
      </div>
    </div>
  );
}
