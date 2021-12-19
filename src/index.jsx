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

const App = () => (
  <>
    {/*
      Tady bude tvůj Vánoční přáníčko :)

      - HTML/CSS podklady máš ve složce /html-vzor
      - vyzobej si ze souborů HTML a CSS pro svoje komponenty
      - aplikace 5 stránek (úvod, vyzvednutí přáníčka, vytvoření přáníčko, zobrazení kódu vytvořeného přáníčka, samotné přáníčko)
      - použij router (musíš si ho nainstalovat)
    */}
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <CreateCard />} />
        <Route path="/card/:id" element={ <DisplayCard /> } />
      </Routes>
    </BrowserRouter>
  </>
);

render(<App />, document.querySelector('#app'));
