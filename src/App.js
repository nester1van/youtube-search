import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import LocalStorage from './components/localStorage/LocalStorage';
import {BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
      <Provider store={store}>     
        <LocalStorage>
          <Router>
            <Header/>
            <Pages/>
          </Router>
        </LocalStorage>
      </Provider>
    </div>
  );
}

export default App;
