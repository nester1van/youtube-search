import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../components/protectedRoute/ProtectedRoute';
import AuthorizationPage from './authorization-page/AuthorizationPage';
import SearchPage from './search-page/SearchPage';
import FavoritesPage from './favorites-page/FavoritesPage';

const Pages = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <AuthorizationPage/>
      </Route>
      <ProtectedRoute path='/searchpage'>  
        <SearchPage/>
      </ProtectedRoute>
      <ProtectedRoute path='/favorites'>
        <FavoritesPage/>
      </ProtectedRoute> 
    </Switch>
  );
}

export default Pages;