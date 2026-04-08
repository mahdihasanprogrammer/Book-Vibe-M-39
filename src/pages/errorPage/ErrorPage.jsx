import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className=" flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4">
            <h1 className="text-9xl font-extrabold animate-bounce">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-lg md:text-xl mt-2 text-gray-200 text-center max-w-md">
                Oops! The page you are looking for does not exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;