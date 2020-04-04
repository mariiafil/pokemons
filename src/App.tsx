import React, { FC } from 'react';
import { Header } from './components/Header/Header';
import { List } from './components/List/List';
import './app.scss';
import { Details } from './components/Details/Details';

const App: FC = () => (
  <div>
    <Header />
    <section className="main-section">
      <List />
      <Details />
    </section>

  </div>
);

export default App;
