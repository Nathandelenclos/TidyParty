import React from 'react';
import { NavBar } from '@Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from '@Pages/index';
import { GlobalContextProvider } from '@Contexts/Global';
import { ThemeContextProvider } from '@Contexts/Theme';
import json from '../../package.json';

export const App: React.FC = () => (
  <GlobalContextProvider>
    <ThemeContextProvider>
      <BrowserRouter basename={json.homepage}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  </GlobalContextProvider>
);
