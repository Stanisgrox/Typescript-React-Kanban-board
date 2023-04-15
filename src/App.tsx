import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import * as storage from './data_engine/localstorage';
import MainRouter from './components/router/router';

/*
export interface Cards {
  card: {
    id: number,
    name: string,
    description: string,
    coloumn: string
  }[]
}
*/

//Конфигурация - названия групп карточек.
export const FIRST_COLOUMN = 'Backlog';
export const SECOND_COLOUMN = 'Ready';
export const THIRD_COLOUMN = 'In Progress';
export const FOURTH_COLOUMN = 'Finished';

function App() {
  //Функция для первоначальной настройки localstorage
  storage.storageStartup();
  
  return (
    <div className="App">
      <Header />
      <MainRouter />
      <Footer active={1} finished={1} author = '<NAME>' year={2023} />
    </div>
  );
}

export default App;
