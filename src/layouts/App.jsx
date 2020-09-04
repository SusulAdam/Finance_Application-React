import React from 'react';
import '../styles/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import Page from './Page'

function App() {
  return (
    <>
      <Router>
        <main>
          <nav>
            <Navigation />
          </nav>
          <section className="page">
            <Page />
          </section>
        </main>
      </Router>
    </>
  );
}

export default App;
