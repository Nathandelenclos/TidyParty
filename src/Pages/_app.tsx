import React from 'react';
import { NavBar } from '@Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from '@Pages/Index';
import { GlobalContextProvider } from '@Contexts/Global';
import { ThemeContextProvider } from '@Contexts/Theme';
import { CreateEventPage } from '@Pages/event/Create';
import { PackSelectPage } from '@Pages/event/PackSelect';
import { PackCreatePage } from '@Pages/event/PackCreatePage';
import json from '../../package.json';

export const App: React.FC = () => (
  <GlobalContextProvider>
    <ThemeContextProvider>
      <BrowserRouter basename={json.homepage}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events/create" element={<CreateEventPage />} />
          <Route path="/events/pack/select" element={<PackSelectPage />} />
          <Route path="/events/pack/create" element={<PackCreatePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  </GlobalContextProvider>
);
