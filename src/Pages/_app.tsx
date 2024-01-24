import React from 'react';
import { NavBar } from '@Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from '@Pages/Index';
import { GlobalContextProvider } from '@Contexts/Global';
import { ThemeContextProvider } from '@Contexts/Theme';
import { CreateEventPage } from '@Pages/event/Create';
import { PackSelectPage } from '@Pages/event/PackSelect';
import { PackCreatePage } from '@Pages/event/PackCreatePage';
import { Helmet } from 'react-helmet';
import json from '../../package.json';

export const App: React.FC = () => (
  <GlobalContextProvider>
    <ThemeContextProvider>
      <Helmet>
        <title>TidyParty</title>
        <meta name="keywords" content="tidyParty, party, tidy" />
        <meta name="author" content="Nathan DELENCLOS" />
        <meta property="og:title" content="Accueil - TidyParty" />
        <meta
          property="og:description"
          content="Elevate every gathering into a memorable celebration with Tidy Party: the ultimate app for effortlessly organizing unforgettable soirées with style and ease!"
        />
        <meta
          property="og:image"
          content="https://www.francebleu.fr/s3/cruiser-production/2023/04/ea0c723d-d743-4204-9c50-4153e6769d8e/1200x680_sc_gettyimages-451813251.jpg"
        />
        <meta property="og:url" content="https://nathandelenclos.github.io/TidyParty/" />
      </Helmet>
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
