import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocalStorage from './components/localStorage/LocalStorage';
import Header from './components/header/Header';
import AuthorizationPage from './pages/authorization-page/AuthorizationPage';
import SearchPage from './pages/search-page/SearchPage';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import FavoritesPage from './pages/favorites-page/FavoritesPage';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        
        <LocalStorage>
          <Router>
            <Header/>
            <Switch>
              <Route exact path='/'><AuthorizationPage/></Route>
              <ProtectedRoute path='/searchpage'>  
                <SearchPage/>
              </ProtectedRoute>
              <ProtectedRoute path='/favorites'>
                <FavoritesPage/>
              </ProtectedRoute> 
            </Switch>
          </Router>
        </LocalStorage>
      </div>
    </Provider>
  );
}

export default App;
