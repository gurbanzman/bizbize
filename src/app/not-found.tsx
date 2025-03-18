// pages/404.tsx

import Link from "next/link";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">
        <i className="fa-solid fa-face-frown text-gray-600"></i> Oh! The page
        cannot be found...
      </h2>
      <h3 className="text-lg text-gray-600 mt-2">The link might be incorrect...</h3>
      <h4 className="text-lg text-gray-600 mt-1">or the page was deleted</h4>
      <Link
        href={'/'}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Back
      </Link>
    </div>
  );
}
