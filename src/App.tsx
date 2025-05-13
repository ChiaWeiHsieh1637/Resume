// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#0a192f]">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="*" element={<Hero />} />
      </Routes>
    </main>
  );
};

export default App;