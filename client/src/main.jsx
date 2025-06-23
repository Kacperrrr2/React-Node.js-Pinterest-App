import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Homepage from './routes/homepage/homepage.jsx';
import CreatePage from './routes/createPage/createPage.jsx';
import Postpage from './routes/postpage/postpage.jsx';
import AuthPage from './routes/authPage/authPage.jsx';
import SearchPage from './routes/searchPage/searchPage.jsx';
import ProfilePage from './routes/profilePage/profilePage.jsx';
import MainLayout from './routes/layouts/mainLayout.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/pin/:id" element={<Postpage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/:username" element={<ProfilePage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
