import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        
      </main>
      <Footer active={1} finished={1} author = '<NAME>' year={2023} />
    </div>
  );
}

export default App;
