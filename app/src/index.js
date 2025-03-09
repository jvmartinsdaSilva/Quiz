import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { QuestionsProvider } from './context/QuestionContext';
import { Home } from './pages/Home';
import { Questions } from './pages/Questions';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuestionsProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/questions' Component={Questions} />
        </Routes>
      </BrowserRouter>
    </QuestionsProvider>
  </React.StrictMode>
);
