
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MLEvaluationPage from './pages/MLEvaluationPage';
import DLEvaluationPage from './pages/DLEvaluationPage';
import ModelPage from './pages/ModelPage';

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme) return storedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <HashRouter>
      <div className="flex flex-col h-screen bg-light-background dark:bg-background">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
           <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/evaluation/ml" element={<MLEvaluationPage />} />
              <Route path="/evaluation/dl" element={<DLEvaluationPage />} />
              <Route path="/models/:modelName" element={<ModelPage />} />
           </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
