import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './bootstrap.min.css';
import './index.css';
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { Error404 } from './pages/Error404.jsx';
import { Services } from './pages/Services.jsx';
import { ServicesInner } from './pages/ServicesInner.jsx';
import { PublicTemplate } from './templates/PublicTemplates.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicTemplate />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:service' element={<ServicesInner />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
