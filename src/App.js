import React from 'react';
// import Menu from './components/Menu/Menu';
import { Burger } from './components/Burger/Burger';
import { About } from './components/About/About';
import { Pricing } from './components/Pricing/Pricing';
import { Gallery } from './components/Gallery/Gallery';
import { Contacts } from './components/Contacts/Contacts';
import css from './App.module.css';

function App() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1 className={css.logo}>Студія МАК</h1>
        <nav>
          <Burger />
        </nav>
      </header>
      {/* <Menu /> */}
      <main>
        <About />
        <Pricing />
        <Gallery />
      </main>
      <Contacts />
    </div>
  );
}

export default App;
