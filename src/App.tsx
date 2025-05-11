// src/App.tsx
import React from 'react';
import Hero from './sections/Hero';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#0a192f]">
      <Hero />
    </main>
  );
};

export default App;