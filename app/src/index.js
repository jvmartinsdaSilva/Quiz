import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { QuestionsProvider } from './context/QuestionContext';

import { Home } from './pages/Home/index.js';
import { MenuGame } from './pages/MenuGame/index.js';
import { Questions } from './pages/Questions';
import { Results } from './pages/Result';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuestionsProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Menu' Component={MenuGame} />
          <Route path='/questions' Component={Questions} />
          <Route path='/results' Component={Results} />
        </Routes>
      </BrowserRouter>
    </QuestionsProvider>
  </React.StrictMode>
);
