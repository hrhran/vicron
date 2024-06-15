import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md text-center">
        <h1 className="text-2xl mb-4 text-gray-900 dark:text-gray-100">
          Login
        </h1>
        <div>
          <a
            href="http://localhost:8080/auth/google/login"
            className="inline-block px-6 py-2 my-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600"
          >
            Login with Google
          </a>
        </div>
        <div>
          <a
            href="http://localhost:8080/auth/discord/login"
            className="inline-block px-6 py-2 my-2 text-sm text-white bg-purple-500 rounded-full hover:bg-purple-600"
          >
            Login with Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
