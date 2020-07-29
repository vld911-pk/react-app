import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Aside from './components/Aside';



function App() {
  return (
        <div className = "app-wrapper">
            <Header />
            <Aside />
            <Content />
            <Footer />
        </div>
  );
}
export default App;
