import React from 'react';
import Header from './componentes/Header'
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Filter from './componentes/Filter';
import ColumnLeft from './componentes/ColumnLeft';
import ColumnCenter from './componentes/ColumnCenter';
import AuthorSearch from './componentes/AuthorSearch';

function App() {

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div class="columns-container">
				<div class="container">
          <Filter></Filter>
          <AuthorSearch></AuthorSearch>
          <ColumnLeft></ColumnLeft>
          <ColumnCenter></ColumnCenter>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
