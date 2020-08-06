import React from 'react';
import { Router, Route } from 'wouter';
import { Reset, Body, Layout } from './components/Layout';
import { Search } from './pages/Search';
import { Favourites } from './pages/Favourites';
import { SearchProvider } from './contexts/SearchContext';
import { FavouritesProvider } from './contexts/FavouritesContext';
import { paths } from './constants/paths';

export const App = () => (
  <FavouritesProvider>
    <SearchProvider>
      <Reset />
      <Body />
      <Layout>
        <Router>
          <Route path={paths.search} component={Search} />
          <Route path={paths.favourites} component={Favourites} />
        </Router>
      </Layout>
    </SearchProvider>
  </FavouritesProvider>
);
