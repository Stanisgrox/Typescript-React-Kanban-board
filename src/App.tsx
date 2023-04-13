import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import CardBlock from './components/card-block/card-block';
import * as storage from './data_engine/localstorage';


function App() {
  //Функция для первоначальной настройки localstorage
  storage.storageStartup();
  return (
    <div className="App">
      <Header />
      <main className = 'card-wrapper'>
        <CardBlock cardname = 'Backlog'>
        </CardBlock>
        <CardBlock cardname = 'Ready' />
        <CardBlock cardname = 'In Progress' />
        <CardBlock cardname = 'Finished' />
      </main>
      <Footer active={1} finished={1} author = '<NAME>' year={2023} />
    </div>
  );
}

export default App;
