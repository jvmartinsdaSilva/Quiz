import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { QuestionsProvider } from './context/QuestionContext';
import { UserProvider } from './context/UserContext.js';

import { Home } from './pages/Home/index.js';
import { MenuGame } from './pages/MenuGame/index.js';
import { Questions } from './pages/Questions/index.js';
import { Results } from './pages/Results/index.js';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>

        <Routes>
          <Route path='/' Component={Home} />
        </Routes>

        <QuestionsProvider>
          <Routes>
            <Route path='/Menu' Component={MenuGame} />
            <Route path='/questions' Component={Questions} />
            <Route path='/results' Component={Results} />
          </Routes>
        </QuestionsProvider>

      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
