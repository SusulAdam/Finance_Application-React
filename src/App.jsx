import React from 'react';
import 'styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from 'layouts/Navigation';
import Page from 'layouts/Page'

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
