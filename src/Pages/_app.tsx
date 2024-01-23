import React from 'react';
import { NavBar } from '@Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from '@Pages/Index';
import { GlobalContextProvider } from '@Contexts/Global';
import { ThemeContextProvider } from '@Contexts/Theme';
import { CreateEventPage } from '@Pages/event/Create';
import { PackSelectPage } from '@Pages/event/PackSelect';
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
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  </GlobalContextProvider>
);
