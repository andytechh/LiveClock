import React from 'react';
import Clock from '../components/Clock';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="w-full max-w-md animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-medium text-gray-800 text-center mb-8">Elegant Clock</h1>
        <Clock />
        <p className="text-center text-sm text-gray-500 mt-8">
          A minimalist clock with precise timekeeping
        </p>
      </div>
    </div>
  );
};

export default Index;