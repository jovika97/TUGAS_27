// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Produk Olahan Khas Kabupaten Seruyan</h1>
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default App;



