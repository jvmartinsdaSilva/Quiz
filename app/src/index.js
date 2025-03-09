import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { Questions } from './pages/Questions';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/questions' Component={Questions} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
