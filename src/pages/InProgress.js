import React from 'react';

export default function InProgress() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Under Construction</h1>
        <p className="text-gray-600 mb-6">I'm currently working on this page. It'll be ready soon!</p>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div className="h-2 bg-yellow-400 w-1/2 animate-pulse"></div>
        </div>
          <p className="text-gray-500 italic mb-8"> I promise it'll be worth the wait!</p>
          <p className="text-gray-500 italic mb-8"> Can't wait? Ask me about it's details on <a href="https://www.linkedin.com/in/cagdasm" className="text-blue-500 hover:text-blue-600">LinkedIn</a>!</p>
      </div>
    </div>
  );
}