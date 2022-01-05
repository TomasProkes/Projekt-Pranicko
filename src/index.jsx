import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CreateCard from './components/CreateCard';
import DisplayCard from './components/DisplayCard';
import './style.css';

const App = () => {
  const apiBaseUrl = 'https://xmas-api.itgirls.cz/cards';
  
  return (
    <>
      {
      }
      <BrowserRouter>
        <Routes>
          <Route path="*" element={ <CreateCard apiBaseUrl={apiBaseUrl}/>} />
          <Route path="/card/:id" element={ <DisplayCard apiBaseUrl={apiBaseUrl} /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

render(<App />, document.querySelector('#app'));
