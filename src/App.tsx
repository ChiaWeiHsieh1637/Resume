// src/App.tsx
import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#0a192f]">
      <Hero />
      <About />
    </main>
  );
};

export default App;